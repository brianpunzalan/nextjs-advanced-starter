/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionCreatorWithPayload, PayloadAction } from '@reduxjs/toolkit';

export default <T>(actionCreator: ActionCreatorWithPayload<any, string>) => (
  payload: T
): PayloadAction<T> => actionCreator(payload);
