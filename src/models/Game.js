export default class Game {
  constructor(text) {
    this.id = Date.now();
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
}
