import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./partials/Header";
import { MatchUpListContextProvider } from "./context/MatchUpListContext";
import NewPlayer from "./playerViews/NewPlayer";
import NewMatchUp from "./matchUpViews/NewMatchUp";
import MatchUpList from "./matchUpViews/MatchUpList";
import Footer from "./partials/Footer";

function App() {
  return (
    <div>
      <Header />
      <MatchUpListContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/newPlayer">
              <NewPlayer />
            </Route>
            <Route path="/newMatchUp">
              <NewMatchUp />
            </Route>
            <Route path="/">
              <MatchUpList />
            </Route>
          </Switch>
        </BrowserRouter>
      </MatchUpListContextProvider>
      <Footer />
    </div>
  );
}

export default App;
