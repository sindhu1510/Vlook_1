import { SET_SELECTED_DATE } from '../../../../redux/actionTypes';

const initialState = {
  selectedDate: new Date(), 
};

const calendarReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;
