import { useContext, useReducer, useEffect, createContext } from 'react';
import axios from 'axios';
import reducer from '../reducer/pagesReducer';
import {
  GET_PAGES_REQUEST,
  GET_PAGES_FAIL,
  GET_PAGES_SUCCESS,
  GET_SINGLE_PAGES_FAIL,
  GET_SINGLE_PAGES_REQUEST,
  GET_SINGLE_PAGES_SUCCESS,
} from '../actions';
import { pages_url } from '../utils/constants';

const initial_State = {
  pages_loading: false,
  pages_error: false,
  pages: [],
  single_page_loading: false,
  single_page_error: false,
  single_page: {},
};

const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_State);
  const fetchPages = async (url) => {
    dispatch({ type: GET_PAGES_REQUEST });
    try {
      const response = await axios.get(url);
      const pages = response.data.pages;
      dispatch({ type: GET_PAGES_SUCCESS, payload: pages });
    } catch (error) {
      dispatch({ type: GET_PAGES_FAIL });
    }
  };
  const fetchSinglePage = async (url) => {
    dispatch({ type: GET_SINGLE_PAGES_REQUEST });
    try {
      const response = await axios.get(url);
      const singlePage = response.data.page;
      dispatch({ type: GET_SINGLE_PAGES_SUCCESS, payload: singlePage });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PAGES_FAIL });
    }
  };

  useEffect(() => {
    fetchPages(pages_url);
  }, []);

  return (
    <PagesContext.Provider value={{ ...state, fetchSinglePage }}>
      {children}
    </PagesContext.Provider>
  );
};

export const usePagesContext = () => {
  return useContext(PagesContext);
};
