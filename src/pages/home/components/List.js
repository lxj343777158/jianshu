import React, { PureComponent, Fragment } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;

    return (
      <Fragment>
        {list.map((item, index) => {
          return (
            <Link key={index} to={'/detail/'+item.get('id')}>
              <ListItem>
                <img
                  alt={item.get("id")}
                  src={item.get("imgUrl")}
                  className="pic"
                />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多内容</LoadMore>
      </Fragment>
    );
  }
}

const mapState = state => ({
  list: state.get("home").get("articleList"),
  page: state.getIn(["home", "articlePage"])
});

const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});

export default connect(
  mapState,
  mapDispatch
)(List);
