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
    console.log(game);
    const newHistory = new History(game);
    const histories = this.restoreFromLocalStorage();
    const newHistories = [...histories, newHistory];
    console.log(histories, newHistory);
    this.saveToLocalStorage(newHistories);
  }
  getHistories() {
    return this.restoreFromLocalStorage();
  }
  clearHistories() {
    this.saveToLocalStorage([]);
  }
  restoreFromLocalStorage() {
    const historiesJSON = localStorage.getItem(this.localStorageKey);
    return historiesJSON ? JSON.parse(historiesJSON) : [];
  }
  saveToLocalStorage(newHistories) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(newHistories));
  }
}
