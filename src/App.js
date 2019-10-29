import React, { Fragment } from "react";
import { ResetGlobalStyled } from "./style";
import Header from "./common/header";

function App() {
  return (
    <Fragment>
      <ResetGlobalStyled />
      <Header />
    </Fragment>
  );
}

export default App;
