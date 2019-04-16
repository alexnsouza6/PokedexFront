import React, { Component } from "react";
import { Card, Image, Grid, Loader, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPokemons } from "./actions/PokeDexActions";
import "./style.css";

class PokeDex extends Component {
  // TO DO: align all pokemons in center of page

  componentDidMount() {
    this.props.fetchPokemons();
  }

  handlePokemonSelect = pokemon => {
    this.props.history.push(`/pokemon/${pokemon.id}`);
  };

  render() {
    if (this.props.pokemons.byID) {
      return (
        <Grid>
          <Grid.Row>
            <Image
              className="pokemon-logo"
              src={require("../../assets/pokemon_logo.png")}
            />
          </Grid.Row>
          <Link to="/create-pokemon">
            <Button>Criar um pokemon</Button>
          </Link>
          <Grid.Row>
            {this.props.pokemons.byID.map((pokemon, index) => {
              return (
                <Grid.Column width={5} key={index}>
                  <Card onClick={() => this.handlePokemonSelect(pokemon)}>
                    <Image src={pokemon.image} size="small" />
                    <Card.Content>
                      <Card.Header>{pokemon.name}</Card.Header>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      );
    } else {
      return <Loader active />;
    }
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons
});

export default connect(
  mapStateToProps,
  { fetchPokemons }
)(PokeDex);
