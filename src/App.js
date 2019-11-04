import React, { Fragment } from "react";
import { ResetGlobalStyled } from "./style";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <ResetGlobalStyled />
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </Fragment>
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
}

export default App;
