import React, { Component } from "react";

interface AppProps {
  text: any;
}

export default class extends Component<AppProps> {
  render() {
    return (
      <>
        <section
          className="home"
          style={{
            paddingTop: 150
          }}
        >
          {this.props.text}
        </section>
      </>
    );
  }
}
