import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import styled from "styled-components";

import Main from "../pages/Main";

function App() {
  return (
    <>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </ConnectedRouter>
    </>
  );
}

export default App;
