class FSProxy {
  // fs_subject is the real file system (real object)
  constructor(fs_subject) {
    this._fs = fs_subject;
  }

  // has the same signature as the fs.readFile method
  readFile(path, format, cb) {
    if (!path.match(/.md$|.MD$/)) {
      return cb(new Error(`Can only read Markdown files.`));
    }

    this._fs.readFile(path, format, (error, content) => {
      if (error) {
        console.log(error);
        return cb(error);
      }

      return cb(null, content);
    });
  }
}

module.exports = FSProxy;
