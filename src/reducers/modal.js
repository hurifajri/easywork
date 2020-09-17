import * as ACT from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case ACT.SHOW_MODAL: {
      return true;
    }
    case ACT.HIDE_MODAL: {
      return false;
    }
    default: {
      return state;
    }
  }
};
