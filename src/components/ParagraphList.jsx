import React, { Component } from "react";
import ParagraphCard from "./ParagraphCard";
import PropTypes from "prop-types";

export default class ParagraphList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        {this.props.paragraphs.map((item) => (
          <ParagraphCard
            key={item.id}
            paragraph={item}
            onDelete={() => this.props.onDeleteParagraph(item.id)}
          />
        ))}
      </div>
    );
  }
}

ParagraphList.propTypes = {
  paragraphs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  onDeleteParagraph: PropTypes.func.isRequired,
};
