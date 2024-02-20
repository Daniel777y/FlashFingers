import React, { Component } from "react";
import BaseBody from "../templates/BaseBody";
import GameInterface from "../components/GameInterface";

import GameManager from "../models/GameManager.js";
import "../styles/IndexPage.css";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.gm = new GameManager();
    this.state = {
      //currentGame: this.gm.startGame(),
      currentGame: null,
      gameStarted: false,
    };
  }
  componentDidMount() {
    document.addEventListener("keypress", this.handleFirstPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleFirstPress);
  }
  handleFirstPress = (e) => {
    e.preventDefault();
    document.removeEventListener("keypress", this.handleFirstPress);
    this.startGame();
  };
  startGame = () => {
    const newGame = this.gm.startGame();
    if (!newGame.text) {
      alert('You do not have any paragraphs, please upload some first.');
      return;
    }
    this.setState({
      currentGame: newGame,
      gameStarted: true,
    });
  };
	handleInput = (input) => {
    if (!this.state.gameStarted) {
      return;
    }
		let updatedGame = this.state.currentGame;
    updatedGame = this.gm.processInput(updatedGame, input);
    if (this.gm.isCompleted(updatedGame)) {
      updatedGame = this.gm.endGame(updatedGame);
      // start a new game
      const newGame = this.gm.startGame();
      this.setState({ currentGame: newGame });
    } else {
      this.setState({ currentGame: updatedGame });
    }
	};
  render() {
    const { currentGame, gameStarted } = this.state;
    return (
      <div className="App">
        <BaseBody>
          { gameStarted ? (
            <GameInterface
              game={currentGame}
              onInputChange={this.handleInput}
            />
          ) : (
            <p className="start-game-msg">Press any key to start the game...</p>
          )}
        </BaseBody>
      </div>
    );
  }
}
