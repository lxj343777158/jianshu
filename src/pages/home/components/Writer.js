import React, { PureComponent } from "react";
import { WritterWrapper } from "../style";
import { connect } from "react-redux";

class Writter extends PureComponent {
  render() {
    return <WritterWrapper>Writter</WritterWrapper>;
  }
}

export default connect(
  null,
  null
)(Writter);
