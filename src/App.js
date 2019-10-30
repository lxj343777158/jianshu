import React from "react";
import { ResetGlobalStyled } from "./style";
import Header from "./common/header";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ResetGlobalStyled />
      <Header />
    </Provider>
  );
}

export default App;
