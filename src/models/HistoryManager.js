import History from "./History.js";


export default class HistoryManager {
  constructor() {
    this.localStorageKey = 'histories';
    // if localstorage doesn't have histories item
    if (!localStorage.getItem(this.localStorageKey)) {
      this.saveToLocalStorage([]);
    }
  }
  addHistory(game) {
    //console.log(game);
    const newHistory = new History(game);
    const histories = this.restoreFromLocalStorage();
    // make sure not exceed 100
    if (histories.length >= 100) {
      histories.shift();
    }
    this.saveToLocalStorage([...histories, newHistory]);
  }
  getHistories() {
    return this.restoreFromLocalStorage();
  }
  clearHistory() {
    this.saveToLocalStorage([]);
  }
  calcAvgWPM() {
    const histories = this.restoreFromLocalStorage();
    if (histories.length === 0) {
      return 0;
    }
    //console.log(histories);
    const totWPM = histories.reduce((acc, item) => acc + item.wpm, 0);
    return totWPM / histories.length;
  }
  calcAvgAccuracy() {
    const histories = this.restoreFromLocalStorage();
    if (histories.length === 0) {
      return 100;
    }
    const totAccuracy = histories.reduce((acc, item) => acc + item.accuracy, 0);
    return totAccuracy / histories.length;
  }
  restoreFromLocalStorage() {
    const historiesJSON = localStorage.getItem(this.localStorageKey);
    return historiesJSON ? JSON.parse(historiesJSON) : [];
  }
  saveToLocalStorage(newHistories) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(newHistories));
  }
}
