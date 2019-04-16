import React, { Component } from "react";
import { Button, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { createPokemon } from "./actions/PokemonActions";

export class PokemonCreate extends Component {
  state = {
    pokemonName: "",
    pokemonImage: {},
    pokemonType: "",
    pokemonEvolutionID: ""
  };

  handlePokemonNameChange = e => {
    this.setState({ pokemonName: e.target.value });
  };

  handlePokemonType = e => {
    this.setState({ pokemonType: e.target.value });
  };

  handlePokemonEvolution = e => {
    this.setState({ pokemonEvolutionID: parseInt(e.target.value) });
  };

  fileSelectedHandler = event => {
    const selectedFile = event.target.files;
    this.setState({ pokemonImage: selectedFile[0] });
  };

  handleSubmit = e => {
    e.preventDefault();
    const type = [
      { description: this.state.pokemonType },
      { description: "grass" }
    ];
    const fd = new FormData();
    fd.append("image_url", this.state.pokemonImage);
    fd.append("name", this.state.pokemonName);
    fd.append("evolution_id", this.state.pokemonEvolutionID);
    fd.append("pokemon_types[]", JSON.stringify(type));
    this.props.createPokemon(fd, () => this.props.history.push("/"));
  };

  render() {
    return (
      <div>
        <Header as="h1"> Create your own pokemon! </Header>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.state.pokemonName}> Pokemon Name </label>
          <input
            type="text"
            value={this.state.pokemonName}
            onChange={this.handlePokemonNameChange}
          />
          <br />
          <label htmlFor="pokemon-image"> Pokemon Picture </label>
          <input type="file" onChange={this.fileSelectedHandler} />
          <br />
          <label htmlFor={this.state.pokemonType}>Pokemon Type</label>
          <input
            type="text"
            value={this.state.pokemonType}
            onChange={this.handlePokemonType}
          />
          <br />
          <label htmlFor={this.state.pokemonEvolutionID}>
            Pokemon Evolution (Type its ID)
          </label>
          <input
            type="text"
            value={this.state.pokemonEvolutionID}
            onChange={this.handlePokemonEvolution}
          />
          <br />
          <Button type="submit"> Submit </Button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createPokemon }
)(PokemonCreate);
