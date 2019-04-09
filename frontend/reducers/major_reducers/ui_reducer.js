import { combineReducers } from 'redux';

import modal from '../minor_reducers/modal_reducer';

const UIReducer = combineReducers({
  modal,
});

export default UIReducer;