import React, { Component } from "react";
import { Button, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { editPokemon } from "./actions/PokemonActions";

class PokemonEdit extends Component {
  state = {
    pokemonName: "",
    pokemonImage: {},
    pokemonEvolutionID: ""
  };

  handlePokemonNameChange = e => {
    this.setState({ pokemonName: e.target.value });
  };

  fileSelectedHandler = event => {
    const selectedFile = event.target.files;
    this.setState({ pokemonImage: selectedFile[0] });
  };

  handlePokemonEvolution = e => {
    this.setState({ pokemonEvolutionID: parseInt(e.target.value) });
  };

  handleSubmit = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image_url", this.state.pokemonImage);
    fd.append("name", this.state.pokemonName);
    fd.append("evolution_id", this.state.pokemonEvolutionID);
    this.props.editPokemon(fd, this.props.match.params.id, () =>
      this.props.history.push("/")
    );
  };

  render() {
    return (
      <div>
        <Header as="h1"> Edit this pokemon! </Header>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.state.pokemonEvolutionID}>Pokemon Name: </label>
          <input
            type="text"
            value={this.state.pokemonName}
            onChange={this.handlePokemonNameChange}
          />
          <br />
          <label htmlFor={this.state.pokemonEvolutionID}>Pokemon Image: </label>
          <input type="file" onChange={this.fileSelectedHandler} />
          <br />
          <label htmlFor={this.state.pokemonEvolutionID}>
            Pokemon Evolution (Type its ID):
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
  { editPokemon }
)(PokemonEdit);
