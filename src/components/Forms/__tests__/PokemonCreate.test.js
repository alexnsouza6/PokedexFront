import React from "react";
import renderer from "react-test-renderer";
import { PokemonCreate } from "../PokemonCreate";

it("renders correctly", () => {
  const tree = renderer.create(<PokemonCreate />).toJSON();
  expect(tree).toMatchSnapshot();
});
