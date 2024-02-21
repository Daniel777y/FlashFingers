import React, { Component } from "react";
import PropTypes from "prop-types";

import HistoryManager from "../models/HistoryManager";

import NavBar from "../components/NavBar";

export default class BaseBody extends Component {
  constructor(props) {
    super(props);
    this.hm = new HistoryManager();
    this.state = {
      wpm: 0,
      accuracy: 100,
    };
  }
	componentDidMound() {
    this.updateAvgs();
  }
  updateAverages = () => {
    const wpm = this.hm.calcAvgWPM();
    const accuracy = this.hm.calcAvgAccuracy();
    this.setState({
      wpm,
      accuracy,
    });
  };
  render() {
    return (
      <div className="FlashFingers">
        <NavBar wpm={this.state.wpm} accuracy={this.state.accuracy} />
				{this.props.children}
      </div>
    );
  }
}

BaseBody.propTypes = {
  children: PropTypes.node.isRequired,
};
