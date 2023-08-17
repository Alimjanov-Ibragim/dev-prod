import { combineReducers } from '@reduxjs/toolkit';

import { sidebarBooleanSlice } from 'shared/model';

export const rootReducer = combineReducers({
  [sidebarBooleanSlice.name]: sidebarBooleanSlice.reducer,
});
