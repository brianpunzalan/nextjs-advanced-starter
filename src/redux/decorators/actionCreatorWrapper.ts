/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionCreatorWithPayload, PayloadAction } from '@reduxjs/toolkit';

const actionCreatorWithPayload = <T>(
  actionCreator: ActionCreatorWithPayload<any, string>
) => (payload: T): PayloadAction<T> => actionCreator(payload);

export default actionCreatorWithPayload;
