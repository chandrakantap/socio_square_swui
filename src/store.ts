import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import planetReducer from 'modules/planet/planetslice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

const rootReducer = combineReducers({
  planetSlice: planetReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
