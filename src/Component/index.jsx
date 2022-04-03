import React, { Component } from "react";
import Glasses_list from "./Glasses_list";

export default class Glasses extends Component {
  render() {
    return (
      <div>
        <div>
          <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
            <h2 className="text-center h2 text-white py-1">Glasses App</h2>
            <div className="d-flex justify-content-center align-items-center">
              <Glasses_list></Glasses_list>
            </div>
          </section>
        </div>
        ;
      </div>
    );
  }
}
