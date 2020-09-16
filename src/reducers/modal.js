import * as actions from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case actions.SHOW_MODAL: {
      return true;
    }
    case actions.HIDE_MODAL: {
      return false;
    }
    default: {
      return state;
    }
  }
};
