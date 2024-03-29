import Game from "./Game.js";
import ParagraphManager from "./ParagraphManager.js"

export default class GameManager {
  constructor() {
    this.pm = new ParagraphManager();
  }
  createGame() {
    const text = this.pm.getRandomParagraph();
    const newGame = new Game(text);
    return newGame;
  }
  startGame(game) {
    const newGame = {
      ...game,
      startTime: Date.now(),
      completed: false,
    };
    return newGame;
  }
  processInput(game, input) {
    const originalInput = game.userInput;
    const inputLen = input.length;
    const pressCnt = (input.length > originalInput.length ? game.pressCnt + 1 : game.pressCnt);
    const errorCnt = (input.length > originalInput.length && input[inputLen - 1] !== game.text.content[inputLen - 1] ? game.errorCnt + 1 : game.errorCnt);
    const accuracy = this.calcAccuracy(pressCnt, errorCnt);
    const wpm = this.calcWPM(game.startTime, input);
    console.log(game, input, wpm, accuracy);
    const newGame = {
      ...game,
      userInput: input,
      pressCnt,
      errorCnt,
      accuracy,
      wpm,
    };
    //console.log(newGame.pressCnt, newGame.errorCnt);
    return newGame;
  }
  isCompleted(game) {
    return game.userInput === game.text.content;
  }
  endGame(game) {
    //console.log(game.wpm, game.accuracy);
    const newGame = {
      ...game,
      endTime: Date.now(),
      completed: true,
    };
    return newGame;
  }
  calcWPM(startTime, input) {
    const currentTime = Date.now();
    const duration = (currentTime - startTime) / 60000;
    const wordCount = input.trim().split(/\s+/).length;
    const wpm = duration > 0 ? (wordCount / duration) : 0;
    return wpm;
  }
  calcAccuracy(tot, err) {
    return Math.round((1 - err / tot) * 10000) / 100;
  }
}
