const { writeFile, unlink } = require("fs");
const path = require("path");

class ExitCommand {
  get name() {
    return `exit... bye!`;
  }

  execute() {
    process.exit(0);
  }
}

class CreateCommand {
  constructor(fileName, content) {
    this._fileName = fileName;
    this._content = content;
    this._fullPath = path.join(__dirname, fileName);
  }

  get name() {
    return `create ${this._fileName}`;
  }

  execute() {
    writeFile(this._fullPath, this._content, (f) => f);
  }

  undo() {
    unlink(this._fullPath, (f) => f);
  }
}

module.exports = { ExitCommand, CreateCommand };
