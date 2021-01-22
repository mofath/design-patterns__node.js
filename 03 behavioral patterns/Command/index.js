const Conductor = require("./Conductor");
const { CreateCommand, ExitCommand } = require("./Commands");

const { createInterface } = require("readline");
const conductor = require("./Conductor");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("create <fileName> <text> | history | redo | undo | exit");
rl.prompt();

rl.on("line", (input) => {
  const [commandName, ...remaining] = input.split(" ");
  const [fileName, ...content] = remaining;
  const fileConten = content.join(" ");

  switch (commandName) {
    case "history":
      conductor.printHistory();
      break;

    case "undo":
      conductor.undo();
      break;

    case "redo":
      conductor.redo();
      break;

    case "exit":
      conductor.run(new ExitCommand());
      break;

    case "create":
      conductor.run(new CreateCommand(fileName, fileConten));
      break;
  }
});
