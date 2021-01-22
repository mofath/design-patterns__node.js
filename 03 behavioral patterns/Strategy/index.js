const Logger = require("./Logger");

Logger.log("Hello 111");
Logger.log("Hello 2222");
Logger.log("Hello 333");

Logger.changeStrategy("toFile");

Logger.log("Hello 111");
Logger.log("Hello 2222");
Logger.log("Hello 333");
