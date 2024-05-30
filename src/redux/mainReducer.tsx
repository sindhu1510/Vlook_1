import { combineReducers } from 'redux';
import calendarReducer from '../module/dashBoard/calendar/store/calendarReducer';

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

export default rootReducer;