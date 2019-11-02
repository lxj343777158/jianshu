import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from "./store";
import { BackTop } from "./style";

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt="#"
            className="banner-img"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572589066633&di=e8fc6cf36c20dc414f237d9201609e79&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb58f8c5494eef01fd63eb2cdeafe9925bc317d94.jpg"
          ></img>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop>
        ) : (
          ""
        )}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeList();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch = dispatch => ({
  changeHomeList() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    let top = document.documentElement.scrollTop;
    if (top > 200) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(Home);
