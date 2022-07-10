import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//initialState
type initialStateType = {
	list: any;
};

const initialState: initialStateType = {
	list: {},
};

export const getList = createAsyncThunk('list/getList', async (_, thunkAPI) => {
	try {
		const getPostConfig = {
			url: '/TEST/fetest',
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true,
			},
		};
		axios.defaults.withCredentials = true;
		const isList = await axios(getPostConfig);
		console.log(isList);
		//thunkAPI.dispatch(setItem(isList));
	} catch (error) {
		alert(`알 수 없는 오류: ${error}`);
	}
});

export const list = createSlice({
	name: 'list',
	initialState,
	reducers: {
		setItem: (state, action) => {
			state.list = { ...action.payload };
		},
	},
});

export const { setItem } = list.actions;
export default list.reducer;
