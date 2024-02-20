import getId from "../utils/idGenerator.js";
export default class Text {
  constructor({ id = getId(), content } = {}) {
    this.id = id;
    this.content = content;
  }
}
