import React, { Component } from "react";

import BaseBody from "../templates/BaseBody";
import HistoryList from "../components/HistoryList";
import HistoryManager from "../models/HistoryManager";
import HistoryInfo from "../components/HistoryInfo";

export default class HistoryPage extends Component {
  constructor(props) {
    super(props);
    this.hm = new HistoryManager();
    this.state = {
      histories: this.hm.getHistories(),
			wpm: 0,
			accuracy: 100,
    };
  }
	componentDidMount() {
		this.setState({
			wpm: this.hm.calcAvgWPM(),
			accuracy: this.hm.calcAvgAccuracy(),
      histories: this.hm.getHistories(),
		});
	}
	onClearHistory = () => {
    if (!confirm('Are you sure to clear all the game records?')) {
      return;
    }
		this.hm.clearHistory();
		this.setState({
			wpm: this.hm.calcAvgWPM(),
			accuracy: this.hm.calcAvgAccuracy(),
      histories: this.hm.getHistories(),
		});
	};
  render() {
    //console.log(this.state.histories);
    return (
      <div className="App">
        <BaseBody>
          <h1>Game History</h1>
          <HistoryInfo wpm={this.state.wpm} accuracy={this.state.accuracy} onClearHistory={this.onClearHistory} />
          <hr className="my-4" />
          <HistoryList histories={this.state.histories} />
        </BaseBody>
      </div>
    );
  }
}
