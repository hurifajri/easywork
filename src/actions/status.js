import * as actions from './types';

export const isView = () => ({
  type: actions.SET_STATUS_VIEW,
});

export const isAdd = () => ({
  type: actions.SET_STATUS_ADD,
});
