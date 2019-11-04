import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;

    if (loginStatus) {
      return (
        <Fragment>
          <div>写文章页面</div>
        </Fragment>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
});

export default connect(
  mapState,
  null
)(Write);
