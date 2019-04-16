import React from "react";
import renderer from "react-test-renderer";
import { PokeDex } from "../PokeDex";
import { MemoryRouter as Router, withRouter } from "react-router-dom";

it("renders correctly", () => {
  const props = {
    pokemons: {
      byID: []
    },
    fetchPokemons: () => {}
  };
  const tree = renderer
    .create(
      <Router>
        <PokeDex {...props} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
