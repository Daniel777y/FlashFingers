import React, { Component } from "react";
import BaseBody from "../templates/BaseBody";
import UploadParagraphForm from "../components/UploadParagraphForm";
import ParagraphManager from "../models/ParagraphManager";
import ParagraphList from "../components/ParagraphList";

export default class UploadPage extends Component {
  constructor(props) {
    super(props);
    this.pm = new ParagraphManager();
    this.state = {
      paragraphs: this.pm.getParagraphs(),
    };
  }
  onUploadParagraph = (paragraph) => {
    if (!paragraph || paragraph.length > 200) {
      return;
    }
    this.pm.addParagraph(paragraph);
    this.updateParagraphs();
  };
  onDeleteParagraph = (id) => {
    console.log(id);
    this.pm.deleteParagraphById(id);
    this.updateParagraphs();
  }
  updateParagraphs() {
    this.setState({
      paragraphs: this.pm.getParagraphs(),
    });
  }
  render() {
    //console.log(this.state.paragraphs);
    return (
      <div className="App">
        <BaseBody>
          <UploadParagraphForm onUploadParagraph={this.onUploadParagraph} />
          <ParagraphList paragraphs={this.state.paragraphs} onDeleteParagraph={this.onDeleteParagraph} />
        </BaseBody>
      </div>
    );
  }
}

