import React, { Component } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

import { about } from "../constants/about";
import { offer } from "../constants/offer";

export default class extends Component {
  render() {
    return (
      <>
        <div className="div1">
          <Navbar />
          <Home />
        </div>
        <div className="div2">
          <About text={about} />
        </div>
        <svg>
          <clipPath id="wave" clipPathUnits="objectBoundingBox">
            <path
              className="st0"
              d="M1,0c0,0-0.3,0.1-0.5,0.1S0.3,0,0,0.1V1h1L1,0z"
            />
          </clipPath>
        </svg>

        <About text={offer} />
      </>
    );
  }
}
