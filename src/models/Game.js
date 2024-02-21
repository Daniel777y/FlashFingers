import getId from "../utils/idGenerator.js"

export default class Game {
  constructor(text) {
    this.id = getId();
    this.text = text;
    this.wpm = 0;
    this.pressCnt = 0;
    this.errorCnt = 0;
    this.accuracy = 100;
    this.startTime = null;
    this.endTime = null;
    this.userInput = '';
    this.completed = false;
  }
  startGame() {
    this.startTime = Date.now();
  }
  endGame() {
    this.endTime = Date.now();
  }
}
