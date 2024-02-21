import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/GameInterface.css";
import rightSound from "../assets/right.mp3";
import wrondSound from "../assets/wrong.mp3";

export default class GameInterface extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.rightAudio = new Audio(rightSound);
    this.wrongAudio = new Audio(wrondSound);
  }
  // if current key matches the next character, play the right sound,
  // otherwise play the wrong sound.
  handleKeyPress = (e) => {
    const idx = e.target.value.length;
    if (idx < this.props.game.text.content.length && e.key === this.props.game.text.content[idx]) {
      this.rightAudio.play();
    } else {
      this.wrongAudio.play();
    }
  };
  handleInputChange = (e) => {
    this.props.onInputChange(e.target.value);
  }
  // return text with colors
  renderText = (userInput, textContent) => {
    return textContent.split('').map((char, index) => {
      let className = 'text-default';
      if (index < userInput.length) {
        // special handle for spaces
        if (char === ' ' && userInput[index] !== ' ') {
          return <span key={index} className="text-unmatch">&nbsp;</span>;
        } else {
          className = userInput[index] === char ? 'text-match' : 'text-unmatch';
        }
      }
      return <span key={index} className={className}>{char}</span>;
    });
  }
  // focus on the input form
  focusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
			<div className="game-container" onClick={this.focusInput}>
        <div className="game-text">
          {this.renderText(this.props.game.userInput, this.props.game.text.content)}
        </div>
        <input
          type="text"
          className="game-input"
          ref={this.inputRef}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          value={this.props.game.userInput}
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
