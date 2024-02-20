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
    const originalInput = game.userInput;
    //newGame.userInput = input;
    //if (newGame.userInput.length > game.userInput.length) {
    //  newGame.pressCnt += 1;
    //  const len = newGame.userInput.length;
    //  if (newGame.userInput[len - 1] !== newGame.text.content[len - 1]) {
    //    newGame.errorCnt += 1;
    //  }
    //}
    //if (!newGame.completed) {
    //  newGame.accuracy = this.calcAccuracy(newGame.pressCnt, newGame.errorCnt);
    //  newGame.wpm = this.calcWPM(newGame.startTime, newGame.userInput);
    //}
    const inputLen = input.length;
    const pressCnt = (input.length > originalInput.length ? game.pressCnt + 1 : game.pressCnt);
    const errorCnt = (input.length > originalInput.length && input[inputLen - 1] !== game.text.content[inputLen - 1] ? game.errorCnt + 1 : game.errorCnt);
    const accuracy = this.calcAccuracy(pressCnt, errorCnt);
    const wpm = this.calcWPM(game.startTime, input);
    const newGame = {
      ...game,
      userInput: input,
      pressCnt,
      errorCnt,
      accuracy,
      wpm,
    };
    console.log(newGame.pressCnt, newGame.errorCnt);
    return newGame;
  }
  isCompleted(game) {
    return game.userInput === game.text.content;
  }
  endGame(game) {
    game.endTime = Date.now();
    game.completed = true;
    console.log(game.wpm, game.accuracy);
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
