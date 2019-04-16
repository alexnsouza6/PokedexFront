import React, { Component } from "react";
import {
  Card,
  Image,
  Grid,
  Loader,
  Button,
  Input,
  Icon
} from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPokemons } from "./actions/PokeDexActions";
import "./style.css";
import axios from "axios";

class PokeDex extends Component {
  state = {
    pokemonName: ""
  };

  componentDidMount() {
    this.props.fetchPokemons();
  }

  handlePokemonSelect = pokemon => {
    this.props.history.push(`/pokemon/${pokemon.id}`);
  };

  handleNameChange = e => {
    this.setState({ pokemonName: e.target.value });
  };

  handlePokemonSearch = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_POKEDEX_API_URL}/find-pokemon`,
      { name: this.state.pokemonName }
    );
    const pokemon = response.data;
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
            <Button>Create a pokemon</Button>
          </Link>
          <Input
            icon={
              <Icon
                name="search"
                inverted
                circular
                link
                onClick={this.handlePokemonSearch}
              />
            }
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
            placeholder="Search..."
          />
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
