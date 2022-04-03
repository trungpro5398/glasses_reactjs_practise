import React, { Component } from "react";

export default class Glasses_item extends Component {
  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        style={{ width: 100, borderRadius: 20 }}
      />
    );
  }
}
