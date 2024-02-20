export default class Text {
  constructor({ id = Date.now(), content } = {}) {
    this.id = id;
    this.content = content;
  }
}
