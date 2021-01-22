const LogStrategy = require("./LogStrategy");
const config = require("./config.json");

class Logger {
  constructor(strategy = "toConsole") {
    this._Logs = [];
    this._strategy = LogStrategy[strategy];
  }

  get Count() {
    return this._Logs.length;
  }

  changeStrategy(newStrategy) {
    this._strategy = LogStrategy[newStrategy];
  }

  log(message) {
    const timeStamp = new Date().toISOString();
    this._Logs.push({ message, timeStamp });
    this._strategy(timeStamp, message);
  }
}

module.exports = new Logger(config.logs.strategy);
