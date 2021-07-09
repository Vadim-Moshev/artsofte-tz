import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import MainPage from "./pages/mainPage";
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <MainPage />;
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
