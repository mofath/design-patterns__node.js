const path = require("path");
const FSProxy = require("./FSProxy");

const fs = new FSProxy(require("fs"));

const textFile = path.join(__dirname, "test.txt");
const mdFile = path.join(__dirname, "test.md");

const callbackHandler = (error, content) => {
  if (error) {
    console.log("\x07");
    console.log(error);
    process.exit();
  }

  console.log("Reading file...");
  console.log(content);
};

// fs.readFile(textFile, "UTF-8", callbackHandler);
fs.readFile(mdFile, "UTF-8", callbackHandler);
