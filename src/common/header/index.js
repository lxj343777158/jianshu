import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";

const Header = props => {
  return (
    <HeaderWrapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe62d;
          </i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe602;</i>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    focused: state.focused
  };
};

const mapDispathToProps = dispath => {
  return {
    handleInputFocus() {
      const action = {
        type: "search_focus"
      };
      dispath(action);
    },

    handleInputBlur() {
      const action = {
        type: "search_blur"
      };
      dispath(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
