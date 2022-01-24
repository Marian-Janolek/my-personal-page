import {
  GET_PAGES_REQUEST,
  GET_PAGES_FAIL,
  GET_PAGES_SUCCESS,
  GET_SINGLE_PAGES_FAIL,
  GET_SINGLE_PAGES_REQUEST,
  GET_SINGLE_PAGES_SUCCESS,
} from '../actions';

const pagesReducer = (state, action) => {
  switch (action.type) {
    case GET_PAGES_REQUEST:
      return { ...state, pages_loading: true, pages_error: false };
    case GET_PAGES_SUCCESS:
      return { ...state, pages: action.payload, pages_loading: false };
    case GET_PAGES_FAIL:
      return { ...state, pages_loading: false, pages_error: true };
    case GET_SINGLE_PAGES_REQUEST:
      return { ...state, single_page_loading: true, single_page_error: false };
    case GET_SINGLE_PAGES_SUCCESS:
      return {
        ...state,
        single_page_loading: false,
        single_page: action.payload,
      };
    case GET_SINGLE_PAGES_FAIL:
      return { ...state, single_page_loading: false, single_page_error: true };
    default:
      return state;
  }
};

export default pagesReducer;
