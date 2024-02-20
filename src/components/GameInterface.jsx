import React, { Component } from "react";
import PropTypes from "prop-types";
import '../styles/GameInterface.css';

export default class GameInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }
  handleInputChange = (e) => {
    this.props.onInputChange(e.target.value);
  }
  renderText = (userInput, textContent) => {
    return textContent.split('').map((char, index) => {
      let className = 'text-default';
      if (index < userInput.length) {
        if (char === ' ' && userInput[index] !== ' ') {
          return <span key={index} className="text-unmatch">&nbsp;</span>;
        } else {
          className = userInput[index] === char ? 'text-match' : 'text-unmatch';
        }
      }
      return <span key={index} className={className}>{char}</span>;
    });
  }
  render() {
    return (
			<div className="game-container" onClick={this.focusInput}>
        <div className="game-text">
          {this.renderText(this.props.game.userInput, this.props.game.text.content)}
        </div>
        <input
          type="text"
          className="game-input"
          onChange={this.handleInputChange}
          value={this.props.game.userInput}
          style={{ opacity: 0, position: 'absolute', width: '1px', height: '1px', border: 'none' }}
					maxLength={this.props.game.text.content.length}
          autoFocus
        />
      </div>
    );
  }
}

GameInterface.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.object.isRequired,
    wpm: PropTypes.number.isRequired,
    pressCnt: PropTypes.number.isRequired,
    errorCnt: PropTypes.number.isRequired,
    accuracy: PropTypes.number.isRequired,
    userInput: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  onInputChange: PropTypes.func.isRequired,
}
