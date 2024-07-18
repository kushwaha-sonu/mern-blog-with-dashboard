
import { combineReducers } from 'redux';
import { userSlice } from '../slices/userSlice';


export const rootReducer = combineReducers({
 userSlice: userSlice.reducer,
});

export default rootReducer;
