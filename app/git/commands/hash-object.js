const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const zlib = require("zlib");

class HashObjectCommand {
  constructor(flag, filepath) {
    this.flag = flag;
    this.filepath = filepath;
  }
  execute() {
    // Make sure that file path exists
    const filepath = path.resolve(this.filepath);

    if (!fs.existsSync(filepath)) {
        throw new Error(`Could not open file ${this.filepath} for reading: No such file or directory`);
    }

    // Read the file and normalize line endings
    let fileContents;
    try {
        fileContents = fs.readFileSync(filepath, { encoding: 'utf8' }).replace(/\r\n/g, '\n');
    } catch (error) {
        throw new Error(`Error reading file ${this.filepath}: ${error.message}`);
    }

    const fileLength = Buffer.byteLength(fileContents); // Use Buffer.byteLength for correct byte length

    // Create Blob
    const header = `blob ${fileLength}\0`;
    const blob = Buffer.concat([Buffer.from(header), Buffer.from(fileContents)]);

    // Optional: Log the blob in hex format for debugging
    // console.log(blob.toString('hex')); // Uncomment this if you want to see the hex output

    // Calculate hash
    const hash = crypto.createHash("sha1").update(blob).digest("hex");

    // If -w then write file also (compress)
    if (this.flag === "-w") {
        const folder = hash.slice(0, 2);
        const file = hash.slice(2);
        const completeFolderPath = path.join(process.cwd(), ".git", "objects", folder);

        try {
            if (!fs.existsSync(completeFolderPath)) {
                fs.mkdirSync(completeFolderPath, { recursive: true });
            }

            const compressedData = zlib.deflateSync(blob);
            fs.writeFileSync(path.join(completeFolderPath, file), compressedData);
        } catch (error) {
            throw new Error(`Error writing compressed data to ${completeFolderPath}: ${error.message}`);
        }
    }

    process.stdout.write(hash); 
}

}
module.exports = HashObjectCommand;
