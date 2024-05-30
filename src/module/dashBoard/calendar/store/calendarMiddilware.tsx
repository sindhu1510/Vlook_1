import { SET_SELECTED_DATE } from '../../../../redux/actionTypes';

export const setSelectedDate = (date: Date) => ({
  type: SET_SELECTED_DATE,
  payload: date,
});
