import { combineReducers } from '@reduxjs/toolkit';
import userServiceReducer from './slice/userService/userService';
import profileCreationReducer from './slice/profileCreationService/profileCreationService';
import staticDataReducer from './slice/staticData/staticDataSlice';
import resetPasscodeReducer from './slice/resetPasscodeService/resetPasscodeService';

const rootReducer = combineReducers({
  profileCreation: profileCreationReducer,
  userService: userServiceReducer,
  staticData: staticDataReducer,
  resetPasscode: resetPasscodeReducer
});

export default rootReducer;
