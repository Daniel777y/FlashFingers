import Game from "./Game.js";
import ParagraphManager from "./ParagraphManager.js"

export default class GameManager {
  constructor() {
    this.pm = new ParagraphManager();
  }
  startGame() {
    const text = this.pm.getRandomParagraph();
    const newGame = new Game(text);
    newGame.startTime = Date.now();
    return newGame;
  }
  processInput(game, input) {
    game.userInput = input;
    if (!game.completed) {
      game.accuracy = this.calcAccuracy(game.pressCnt, game.errorCnt);
      game.wpm = this.calcWPM(game.startTime, game.userInput);
    }
    return game;
  }
  isCompleted(game) {
    return game.userInput === game.text.content;
  }
  endGame(game) {
    game.endTime = Date.now();
    game.completed = true;
  }
  calcWPM(startTime, input) {
    const currentTime = Date.now();
    const duration = (currentTime - startTime) / 60000;
    const wordCount = input.trim().split(/\s+/).length;
    const wpm = duration > 0 ? (wordCount / duration) : 0;
    return wpm;
  }
  calcAccuracy(tot, err) {
    return Math.round(1 - err / tot);
  }
}
