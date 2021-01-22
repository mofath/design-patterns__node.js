const path = require("path");
const { appendFile } = require("fs");

class LogStrategy {
  static noDate(timeStamp, message) {
    console.log(message);
  }

  static toFile(timeStamp, message) {
    const fileName = path.join(__dirname, "logs.txt");
    appendFile(fileName, `${timeStamp} - ${message} \n`, (error) => {
      if (error) {
        console.log("Error writing to file");
        console.error(error);
      }
    });
  }

  static toConsole(timeStamp, strategy) {
    console.log(`${timeStamp} - ${strategy}`);
  }

  static none() {}
}

module.exports = LogStrategy;
