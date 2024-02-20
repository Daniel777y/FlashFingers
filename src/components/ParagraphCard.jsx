import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ParagraphCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="card">
          <div className="card-body">
            <p className="card-text">{this.props.paragraph.content}</p>
            <button className="btn btn-primary" onClick={this.props.onDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

ParagraphCard.propTypes = {
  paragraph: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
