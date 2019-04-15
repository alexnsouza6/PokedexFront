import React, { Component, Fragment } from "react";

class Pokemon extends Component {
  state = { pokemon: {} };

  componentDidMount() {
    const { match } = this.props;
    console.log(match.params);
  }

  render() {
    return <Fragment />;
  }
}

export default Pokemon;
