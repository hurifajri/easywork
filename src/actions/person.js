import * as actions from './types';

export const addPerson = person => ({
  type: actions.ADD_PERSON,
  payload: person,
});

export const getPerson = person => ({
  type: actions.GET_PERSON,
  payload: person,
});
