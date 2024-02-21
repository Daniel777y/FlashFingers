import React, { Component } from "react";
import HistoryCard from "./HistoryCard";
import PropTypes from "prop-types";

export default class HistoryList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //console.log(this.props.histories);
    return (
      <div className="row">
        {this.props.histories.map(item => (
          <HistoryCard
            key={item.id}
            history={item}
          />
        ))}
      </div>
    );
  }
}

HistoryList.propTypes = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
      }),
      wpm: PropTypes.number.isRequired,
      accuracy: PropTypes.number.isRequired,
    })
  ),
};
