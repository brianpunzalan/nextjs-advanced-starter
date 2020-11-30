import { useMemo } from 'react';
import {
  configureStore,
  EnhancedStore,
  Store,
  PreloadedState,
} from '@reduxjs/toolkit';
import rootReducer, { RootState } from '../reducers';

let store: Store | undefined;

const initStore = (preloadedState?: PreloadedState<RootState>): EnhancedStore =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export const initializeStore = (
  preloadedState?: PreloadedState<RootState>
): Store => {
  let storeInstance: Store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    storeInstance = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return storeInstance;
  // Create the store once in the client
  if (!store) store = storeInstance;

  return storeInstance;
};

export function useStore(initialState: RootState): Store {
  const storeForUse: Store = useMemo(() => initializeStore(initialState), [
    initialState,
  ]);
  return storeForUse;
}
