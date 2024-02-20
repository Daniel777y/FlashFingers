import Text from "./Text.js";
import Shuffle from "../utils/Shuffle.js";

export default class ParagraphManager {
  constructor() {
    this.localStorageKey = 'paragraphs';
    if (!localStorage.getItem(this.localStorageKey)) {
      this.saveToLocalStorage([]);
    }
  }
  addParagraph(content) {
    if (!content || content.length > 200) {
      return;
    }
    // console.log("addParagraph", content);
    const paragraphs = this.getParagraphs();
    const newParagraph = new Text({ content });
    paragraphs.push(newParagraph);
    console.log(paragraphs);
    this.saveToLocalStorage(paragraphs);
  }
  getParagraphs() {
    return this.restoreFromLocalStorage();
  }
  shufflePragraphs() {
    const newParagraphs = Shuffle(this.getParagraphs);
    this.saveToLocalStorage(newParagraphs);
  }
  getParagraphById(id) {
    const paragraphs = this.getParagraphs();
    return paragraphs.find(item => item.id === id);
  }
  getRandomParagraph() {
    const paragraphs = this.restoreFromLocalStorage();
		const idx = Math.floor(Math.random() * paragraphs.length);
    return paragraphs[idx];
  }
  deleteParagraphById(id) {
    const paragraphs = this.restoreFromLocalStorage();
    const newParagraphs = paragraphs.filter(item => item.id !== id);
    this.saveToLocalStorage(newParagraphs);
  }
  restoreFromLocalStorage() {
    const paragraphsJSON = localStorage.getItem(this.localStorageKey);
    return paragraphsJSON ? JSON.parse(paragraphsJSON) : [];
  }
  saveToLocalStorage(newParagraphs) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(newParagraphs));
  }
}
