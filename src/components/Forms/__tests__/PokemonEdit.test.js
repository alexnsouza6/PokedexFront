import React from "react";
import renderer from "react-test-renderer";
import { PokemonEdit } from "../PokemonEdit";

it("renders correctly", () => {
  const tree = renderer.create(<PokemonEdit />).toJSON();
  expect(tree).toMatchSnapshot();
});
