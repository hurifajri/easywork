import * as actions from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case actions.GET_PERSON: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
