import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokemon from "./components/Pokemon/Pokemon";
import PokeDex from "./components/Pokedex/PokeDex";
import PokemonCreate from "./components/Forms/PokemonCreate";
import PokemonEdit from "./components/Forms/PokemonEdit";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={props => <PokeDex {...props} />} />
        <Route path="/pokemon/:id" render={props => <Pokemon {...props} />} />
        <Route path="/edit-pokemon/:id" component={PokemonEdit} />} />
        <Route path="/create-pokemon" component={PokemonCreate} />
      </Switch>
    </Router>
  );
};

export default App;
