import React, { Component } from "react";
import BaseBody from "../templates/BaseBody";

export default class ErrorPage extends Component {
  render() {
    return (
      <div className="App">
        <BaseBody>
          <h1>Page Not Found</h1>
        </BaseBody>
      </div>
    );
  }
}
