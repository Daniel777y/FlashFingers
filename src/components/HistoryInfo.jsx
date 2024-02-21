import React, { Component } from "react";
import PropTypes from "prop-types";

export default class HistoryInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
			<div className="row justify-content-start">
				<span className="fs-7 col">
           Average WPM: <span className="badge text-bg-secondary">{this.props.wpm.toFixed(2)}</span>
        </span>
        <span className="fs-7 col">
          Average Accuracy: <span className="badge text-bg-secondary">{this.props.accuracy.toFixed(2)}%</span>
        </span>
        <button type="button" className="btn btn-primary btn-sm col-2" onClick={this.props.onClearHistory}>
          Clear History
        </button>
			</div>
    );
  }
}

HistoryInfo.propTypes = {
	wpm: PropTypes.number.isRequired,
	accuracy: PropTypes.number.isRequired,
	onClearHistory: PropTypes.func.isRequired,
};
