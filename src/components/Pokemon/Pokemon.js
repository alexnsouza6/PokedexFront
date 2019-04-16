import React, { Component, Fragment } from "react";
import { Image, Header, List, Card, Loader, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import axios from "axios";

class Pokemon extends Component {
  state = { pokemon: {} };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const response = await axios.get(
      `${process.env.REACT_APP_POKEDEX_API_URL}/pokemons/${params.id}`
    );
    this.setState({ pokemon: response.data });
  }

  handlePokemonDeletion = async id => {
    await axios({
      method: "delete",
      url: `${process.env.REACT_APP_POKEDEX_API_URL}/pokemons/${id}`
    });
    window.location.href = `${process.env.REACT_APP_MAIN}`;
  };

  handleEditRedirect = id => {
    this.props.history.push(`/edit-pokemon/${id}`);
  };

  render() {
    const { pokemon } = this.state;

    if (pokemon && pokemon.types) {
      return (
        <Fragment>
          <Header as="h1">{pokemon.name}</Header>
          <Image src={pokemon.image} />
          <Header as="h4">Types</Header>
          <List as="ol">
            {pokemon.types.map((type, index) => {
              return (
                <List.Item as="li" key={index}>
                  {type.description}
                </List.Item>
              );
            })}
          </List>
          <Button onClick={() => this.handlePokemonDeletion(pokemon.id)}>
            Delete this pokemon
          </Button>
          <Button onClick={() => this.handleEditRedirect(pokemon.id)}>
            Edit this pokemon
          </Button>

          {pokemon.evolutions[0] && (
            <Fragment>
              <Header as="h2">Evolutions</Header>
              <List>
                {pokemon.evolutions.map((pokemon, index) => {
                  return (
                    <Card key={index}>
                      <Image src={pokemon.image} size="small" />
                      <Card.Content>
                        <Card.Header>{pokemon.name}</Card.Header>
                      </Card.Content>
                    </Card>
                  );
                })}
              </List>
            </Fragment>
          )}
        </Fragment>
      );
    } else {
      return <Loader active />;
    }
  }
}

const mapStateToProps = state => ({
  pokemons: state.pokemons
});

export default connect(mapStateToProps)(Pokemon);
