# 🚀 Custom Git Implementation from Scratch

![Git](https://img.shields.io/badge/Git-Custom%20Implementation-orange?style=for-the-badge&logo=git)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)

This project is a **custom implementation of Git** built from scratch to replicate core Git functionalities such as `git init`, `git hash-object`, and the handling of Git objects and `.git` directory structure. The purpose of this project is to understand **how Git works internally**, including **how it manages files, tracks changes, and uses the file system** to efficiently store our records.

---

## ⚡ Key Features & Git Commands

During this project, I explored and built various Git features from scratch. Here’s a list of **Git commands and concepts** that were implemented:

### 🔧 Core Git Concepts

- **Git Objects**: Recreated Git's internal object types like blobs (for file storage), trees (for directories), and commits (to track commit history).
- **Object Hashing**: Implemented Git’s content-addressable storage using SHA-1 hashes.
- **Object Storage**: Mimicked Git’s file compression and object storage using zlib compression.

### 🔨 Commands Implemented

1. **`git init`**: Initializes a new Git repository by creating the entire `.git` directory structure.
   
   ```bash
   node app/main.js init
2. # git hash-object
    Calculates a SHA-1 hash for a file and writes the blob object into Git’s object database.

   ```bash
    node app/main.js hash-object <filename>
3.# .git/ Directory Structure

- **`.git/HEAD`**: Stores the current branch or commit reference.
- **`.git/config`**: Repository-specific configurations.
- **`.git/hooks`**: Hooks directory for user-defined scripts.
- **`.git/objects`**: Stores Git objects (blobs, trees, commits).
- **`.git/refs`**: Stores references for branches and tags.

4. Git Objects

### 1. **Blob Object Storage**
- Stores file contents as Git blobs.
- Each blob is a representation of file data in Git without metadata like filenames or permissions.

### 2. **Tree Objects**
- Mimics how Git stores directory structures.
- Tree objects hold pointers to blob objects (files) and other tree objects (subdirectories), effectively representing the structure of a directory.

### 3. **Commit Objects**
- Commits link tree objects to track project history.
- Each commit points to a tree object (representing the project's file structure at the time of the commit), and also contains metadata like author, commit message, and parent commit(s).

5.  Advanced Git Commands

### 1. **`git cat-file`**
- Retrieves and displays information about a Git object.
- Commonly used with the `-p` option to display the contents of a blob, tree, or commit object.

### 2. **`git ls-tree`**
- Displays the contents of a tree object, representing the directory structure.
- Shows the file names, blob/tree types, and object IDs in a tree.

### 3. **`git write-tree`**
- Captures the current state of the working directory as a tree object.
- Generates a tree object from the staging area, which can later be used in commits.

### 4. **`git commit-tree`**
- Creates a commit object, linking it to a tree object.
- Allows for manual creation of commits by specifying the tree object and parent commits.

   📚 Learning Highlights

Throughout this project, I explored topics such as:

### 1. **Tree Object Storage**
- How tree objects represent directories and files in Git.
- Learned how tree objects store references to blobs and subdirectories.

### 2. **Commit Creation**
- Explored the internal workings of creating and linking commits.
- Gained insights into how commits reference tree objects and track project history.

### 3. **Git Object Model**
- Understood the structure and purpose of Git's internal objects like blobs, trees, and commits.
- Learned how these objects work together to form Git’s version control system.

This deep dive into Git has helped me understand its internal workings, from how files are saved as blobs, organized into trees, and tracked via commits. Recreating Git's commands and storage mechanisms allowed me to learn how Git truly functions under the hood.

💻 How to Run

You can run the custom Git commands by following these steps:

### 1. Initialize a new repository:
    ```bash
       node app/main.js init
 
###2. Hash a file using git hash-object:

    ```bash
    node app/main.js hash-object <filename>

# 🌐 Learning Resources

This project was made possible by learning from Codecrafters' platform, which offers various exciting projects for understanding how tools like Git, Docker, and more work behind the scenes. I highly recommend checking them out:

**[Codecrafters Projects](https://codecrafters.io)**

# 🛠️ Technologies Used

- **JavaScript (Node.js)**: For backend logic and Git command implementation.
- **File System (fs)**: For managing files and performing file operations.
- **Crypto**: For hashing files.
- **zlib**: For compressing Git objects, similar to Git’s object storage.

# 📣 Feedback

Feel free to clone, explore, and provide feedback! Contributions are welcome.

