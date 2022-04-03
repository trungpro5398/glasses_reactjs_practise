import React, { Component } from "react";
import Glasses_item from "./Glasses_item";
import Model from "./Model";

export default class Glasses_list extends Component {
  state = {
    imgKinh: "./img/glassesImage/v2.png",
  };
  servicesList = [
    {
      src: "./img/glassesImage/v1.png",
      alt: "hinh",
    },
    {
      src: "./img/glassesImage/v2.png",
      alt: "hinh",
    },
    {
      src: "./img/glassesImage/v3.png",
      alt: "hinh",
    },
    {
      src: "./img/glassesImage/v4.png",
      alt: "hinh",
    },
    {
      src: "./img/glassesImage/v5.png",
      alt: "hinh",
    },
    {
      src: "./img/glassesImage/v6.png",
      alt: "hinh",
    },
    {
      src: "./img/glassesImage/v7.png",
      alt: "hinh",
    },
    {
      src: "./img/glassesImage/v8.png",
      alt: "hinh",
    },
    {
      src: "./img/glassesImage/v9.png",
      alt: "hinh",
    },
  ];
  handleClick(e, index) {
    e.preventDefault();
    console.log("./img/glassesImage/v" + index + ".png");
    this.setState({ imgKinh: "./img/glassesImage/v" + index + ".png" });
  }
  renderServiceList() {
    return this.servicesList.map((item, index) => {
      return (
        <div className="col-3">
          <button
            className="btn btn-outline-secondary"
            onClick={(e) => this.handleClick(e, index + 1)}
          >
            <Glasses_item src={item.src} alt={item.alt}></Glasses_item>
          </button>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container row">
        <Model imgK={this.state.imgKinh}></Model>
        <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
          {this.renderServiceList()}
        </section>
      </div>
    );
  }
}
