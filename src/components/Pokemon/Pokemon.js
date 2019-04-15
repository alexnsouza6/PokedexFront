import React, { Component, Fragment } from "react";
import { Image, Header, List } from "semantic-ui-react";
import { connect } from "react-redux";

class Pokemon extends Component {
  state = { pokemon: {} };

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const pokemonID = parseInt(params.id) - 1;
    this.setState({ pokemon: this.props.pokemons.byID[pokemonID] });
  }

  render() {
    const { pokemon } = this.state;
    if (pokemon && pokemon.types) {
      return (
        <Fragment>
          <Header as="h1">{pokemon.name}</Header>
          <Image src={pokemon.image_url} />
          <List as="ol">
            {pokemon.types.map((type, index) => {
              return <List.Item as="li">{type.description}</List.Item>;
            })}
          </List>
        </Fragment>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons
});

export default connect(mapStateToProps)(Pokemon);
