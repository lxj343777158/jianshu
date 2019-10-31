import React, { Fragment } from "react";
import { ResetGlobalStyled } from "./style";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <ResetGlobalStyled />
        <Header />
        <BrowserRouter>
          <Fragment>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </Fragment>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
