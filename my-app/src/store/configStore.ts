import { configureStore } from '@reduxjs/toolkit';
import list from './modules/list';

const store = configureStore({
	reducer: { list },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
