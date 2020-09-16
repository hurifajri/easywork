import * as actions from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case actions.SET_STATUS_VIEW: {
      return 'view';
    }
    case actions.SET_STATUS_ADD: {
      return 'add';
    }
    default: {
      return state;
    }
  }
};
