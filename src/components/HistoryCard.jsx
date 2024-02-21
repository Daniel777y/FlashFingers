import React, { Component } from "react";
import PropTypes from "prop-types"

export default class HistoryCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //console.log(this.props);
    return (
			<div className="card mt-3">
				<div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{this.props.history.text.content}</p>
            <footer className="blockquote-footer">WPM: {this.props.history.wpm.toFixed(2)} | Accuracy: {this.props.history.accuracy.toFixed(2)}%</footer>
          </blockquote>
				</div>
			</div>
    );
  }
}

HistoryCard.propTypes = {
  history: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
    wpm: PropTypes.number.isRequired,
    accuracy: PropTypes.number.isRequired,
  }),
};
