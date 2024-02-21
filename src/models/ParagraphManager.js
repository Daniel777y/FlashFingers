import Text from "./Text.js";
import Shuffle from "../utils/Shuffle.js";
import sampleParagraphs from "../utils/sampleParagraphs.js";

export default class ParagraphManager {
  constructor() {
    this.localStorageKey = 'paragraphs';
    // if localstorage doesn't have paragraphs item
    if (!localStorage.getItem(this.localStorageKey)) {
      this.saveToLocalStorage([]);
    }
    // if localstorage doesn't have any paragraph
    // add some sample paragraphs
    const localParagraphs = localStorage.getItem(this.localStorageKey);
    if (localParagraphs.length <= 2) {
      sampleParagraphs.forEach(item => {
        this.addParagraph(item);
      });
    }
  }
  addParagraph(content) {
    if (!content || content.length > 200) {
      alert('A paragraph cannot exceed 200 characters!');
      return;
    }
    // console.log("addParagraph", content);
    const paragraphs = this.restoreFromLocalStorage();
    if (paragraphs.length >= 100) {
      alert('You can only have upload a maximum of 100 paragraphs!');
      return;
    }
    const newParagraph = new Text({ content });
    const newParagraphs = [...paragraphs, newParagraph];
    this.saveToLocalStorage(newParagraphs);
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
