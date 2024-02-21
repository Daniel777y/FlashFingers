import React, { Component } from "react";

import BaseBody from "../templates/BaseBody";
import GameInterface from "../components/GameInterface";

import GameManager from "../models/GameManager.js";
import HistoryManager from "../models/HistoryManager.js";

import "../styles/IndexPage.css";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.gm = new GameManager();
    this.hm = new HistoryManager();
    this.state = {
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
  endGame = (game) => {
    const endedGame = this.gm.endGame(game);
    // save the ended game to history
    this.hm.addHistory(endedGame);
    // update wpm and accuracy
  };
	handleInput = (input) => {
    if (!this.state.gameStarted) {
      return;
    }
		let updatedGame = this.state.currentGame;
    updatedGame = this.gm.processInput(updatedGame, input);
    if (this.gm.isCompleted(updatedGame)) {
      this.endGame(updatedGame);
      //updatedGame = this.gm.endGame(updatedGame);
      //this.hm.addHistory(updatedGame);
      // start a new game
      const newGame = this.gm.startGame();
      this.setState({ currentGame: newGame });
    } else {
      this.setState({ currentGame: updatedGame });
    }
	};
  render() {
    return (
      <div className="App">
        <BaseBody>
          { this.state.gameStarted ? (
            <GameInterface
              game={this.state.currentGame}
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
