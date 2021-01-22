class Conductor {
  constructor() {
    this._history = [];
    this._undone = [];
  }

  run(command) {
    console.log(`Executing command: ${command.name}`);
    command.execute();
    this._history.push(command);
  }

  undo() {
    const command = this._history.pop();
    console.log(`undo ${command.name}`);
    command.undo();
    this._undone.push(command);
  }

  redo() {
    const command = this._undone.pop();
    console.log(`redo ${command.name}`);
    command.execute();
    this._history.push(command);
  }

  printHistory() {
    this._history.forEach((command) => console.log(command.name));
  }
}

module.exports = new Conductor();
