import * as ACT from './types';

export const addPerson = person => ({
  type: ACT.ADD_PERSON,
  person,
});

export const editPerson = person => ({
  type: ACT.EDIT_PERSON,
  person,
});

export const deletePerson = id => ({
  type: ACT.DELETE_PERSON,
  id,
});
