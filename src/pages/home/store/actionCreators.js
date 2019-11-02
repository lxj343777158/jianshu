import axios from "axios";
import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const changeHomeList = result => ({
  type: actionTypes.CHANGE_HOME_LIST,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (result, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list: fromJS(result.articleList),
  nextPage
});

export const getHomeInfo = () => {
  return dispatch => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      const action = changeHomeList(result);
      dispatch(action);
    });
  };
};

export const getMoreList = page => {
  return dispatch => {
    axios.get("/api/homeList.json?page=" + page).then(res => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
  };
};

export const toggleTopShow = show => ({
  type: actionTypes.TOGGLE_SCROLL_TOP,
  show: show
});
