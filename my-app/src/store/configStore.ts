import { configureStore } from '@reduxjs/toolkit';
import list from './modules/list';
import modal from './modules/modal';

const store = configureStore({
	reducer: { list, modal },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
