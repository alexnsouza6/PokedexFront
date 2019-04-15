import React, { Component } from "react";
import { Card, Image, Grid, List } from "semantic-ui-react";
import axios from "axios";
import "./style.css";

class PokeDex extends Component {
  // TO DO: put some margin: 0 auto at Image

  state = { pokemons: [] };

  async componentDidMount() {
    const response = await axios.get(
      `${process.env.REACT_APP_POKEDEX_API_URL}/pokemons`
    );
    this.setState({ pokemons: response.data });
  }

  handlePokemonSelect = pokemon => {
    this.props.history.push(`/pokemon/${pokemon.id}`);
  };

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Image
            className="pokemon-logo"
            src={require("../../assets/pokemon_logo.png")}
          />
        </Grid.Row>
        <Grid.Row>
          {this.state.pokemons.map((pokemon, index) => {
            return (
              <Grid.Column width={5} key={index}>
                <Card onClick={() => this.handlePokemonSelect(pokemon)}>
                  <Image src={pokemon.image_url} />
                  <Card.Content>
                    <Card.Header>{pokemon.name}</Card.Header>
                    <Card.Description>
                      <List>
                        {pokemon.types.map(type => {
                          return <List.Item>{type.description}</List.Item>;
                        })}
                      </List>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    );
  }
}

export default PokeDex;
