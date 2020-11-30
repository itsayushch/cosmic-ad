import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class extends Component {
  render() {
    return (
      <>
        <section
          className="home"
          style={{
            paddingTop: 150
          }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/778236406652076044/779945135848423424/19-44-29-cosmo_1.png"
            alt=""
            style={{
              width: 170,
              borderRadius: "50%"
            }}
          />
          <br />
          <br />
          <h1>Cosmic Advertising</h1>
          <Button style={{ background: "#5970c1", border: 'none' }}>Discord Server</Button>{" "}
          <Button variant="danger">Youtube Channel</Button>
        </section>
      </>
    );
  }
}
