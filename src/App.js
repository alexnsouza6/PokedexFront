import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import Pokemon from "./components/Pokemon/Pokemon";

const PokeDex = lazy(() => import("./components/Pokedex/PokeDex"));

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Suspense fallback={<Loader active inline="centered" />}>
              <PokeDex {...props} />
            </Suspense>
          )}
        />
        <Route path="/pokemon/:id" render={props => <Pokemon {...props} />} />
      </Switch>
    </Router>
  );
};

export default App;
