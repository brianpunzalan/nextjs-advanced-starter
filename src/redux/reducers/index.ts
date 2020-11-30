import { combineReducers } from '@reduxjs/toolkit';
import themeSlice from '../slices/theme';

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
