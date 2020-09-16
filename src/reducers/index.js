import { combineReducers } from 'redux';
import modal from './modal';
import people from './people';
import person from './person';
import status from './status';

export default combineReducers({
  modal,
  people,
  person,
  status,
});
