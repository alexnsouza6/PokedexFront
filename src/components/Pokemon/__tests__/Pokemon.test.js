import React from "react";
import renderer from "react-test-renderer";
import { Pokemon } from "../Pokemon";

it("renders correctly", () => {
  const tree = renderer.create(<Pokemon />).toJSON();
  expect(tree).toMatchSnapshot();
});
