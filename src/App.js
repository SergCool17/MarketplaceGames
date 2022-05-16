import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./components/header/header";
import { HomePage } from "./pages/home-page/home-page";
import { GamePage } from "./pages/game-page/game-page";
import { store } from "./redux";
import { OrderPage } from "./pages/order-page/order-page";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/app/:title">
              <GamePage />
            </Route>
            <Route exact path="/order">
              <OrderPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
