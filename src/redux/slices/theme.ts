import { PayloadAction, createSlice, Slice, Reducer } from '@reduxjs/toolkit';
import actionCreatorWrapper from '../decorators/actionCreatorWrapper';

export enum ThemeNames {
  Default = 'theme/default',
}

export interface ThemeState {
  name: ThemeNames;
}

export interface ChangeThemePayload {
  name: ThemeNames;
}

const changeThemeReducer: Reducer<
  ThemeState,
  PayloadAction<ChangeThemePayload>
> = (state, action) => {
  return {
    ...state,
    name: action.payload.name,
  };
};

const slice: Slice<ThemeState> = createSlice({
  name: 'theme',
  initialState: {
    name: ThemeNames.Default,
  },
  reducers: {
    changeTheme: changeThemeReducer,
  },
});

const { changeTheme } = slice.actions;

export const changeThemeActionCreator = actionCreatorWrapper<
  ChangeThemePayload
>(changeTheme);

export default slice;
