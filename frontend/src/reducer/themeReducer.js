import { THEME_TOGGLE, LANGUAGE_TOGGLE } from '../actions';

const reducer = (state, action) => {
  if (action.type === THEME_TOGGLE) {
    return { ...state, darkMode: !state.darkMode };
  }
  if (action.type === LANGUAGE_TOGGLE) {
    return { ...state, languageSK: !state.languageSK };
  }
  throw new Error(`No such action : ${action.type}`);
};

export default reducer;
