
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const zlib = require("zlib");
class CommitTreeCommand {
  constructor(tree, parent, message) {
    this.treeSHA = tree;
    this.parent = parent;
    this.message = message;
  }
  erecute() {
    const commitContentBuffer = Buffer.concat([
      Buffer.from(`tree ${this.treeSHA}\n`),
      Buffer.from(`parent ${this.parent}\n`),
      Buffer.from(
        `author Akshat Soni <akshat2001soni@gmail.com>${Date.now()} +0000\n`
      ),
      Buffer.from(
        `commiter Akshat Soni <akshat2001soni@gmail.com>${Date.now()} +0000\n\n`
      ),
      Buffer.from(`${this.message}`),
    ]);

    const header = `commit ${commitContentBuffer.length}\0`;
    const data = Buffer.concat([Buffer.from(header), commitContentBuffer]);
    const hash = crypto.createHash("sha1").update(data).digest("hex");

    const folder = hash.slice(0, 2);
    const file = hash.slice(2);
    const completeFolderPath = path.join(process.cwd(), ".git", "objects", folder);

    if (!fs.existsSync(completeFolderPath)) {
      fs.mkdirSync(completeFolderPath, { recursive: true });
    }
    const compressedData = zlib.deflateSync(data);

    fs.writeFileSync(path.join(completeFolderPath, file), compressedData);
    process.stdout.write(hash);
  }
}

module.exports = CommitTreeCommand;
