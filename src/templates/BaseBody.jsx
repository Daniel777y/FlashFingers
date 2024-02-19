import React, { Component } from "react";
import PropTypes from "prop-types";

import NavBar from "../components/NavBar";

export default class BaseBody extends Component {
  render() {
    return (
      <div className="FlashFingers">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

BaseBody.propTypes = {
  children: PropTypes.node.isRequired,
};
