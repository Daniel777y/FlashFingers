import getId from "../utils/idGenerator.js"

export default class History {
  constructor(game) {
    this.id = getId();
    this.text = game.text;
    this.wpm = game.wpm;
    this.accuracy = game.accuracy;
  }
}
