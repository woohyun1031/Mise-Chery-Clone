import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../../components/CardList';

//initialState

type initialStateType = {
	list: any;
	completeList: any;
	isConvert: boolean;
	isStudy: boolean;
	isOpen: boolean;
};

const initialState: initialStateType = {
	list: [],
	completeList: [],
	isConvert: false,
	isStudy: true,
	isOpen: false,
};

export const getList = createAsyncThunk('list/getList', async (_, thunkAPI) => {
	try {
		const getPostConfig = {
			url: '/TEST/fetest',
			method: 'get',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': true,
			},
		};
		axios.defaults.withCredentials = true;
		const PostDate = await axios(getPostConfig);
		const defaultList = [...PostDate.data.body.list];
		const newList = defaultList.map((prop) => {
			return { ...prop };
		});
		thunkAPI.dispatch(setList(newList));
	} catch (error) {
		alert(`알 수 없는 오류: ${error}`);
	}
});

export const list = createSlice({
	name: 'list',
	initialState,
	reducers: {
		setList: (state, action) => {
			state.isStudy
				? (state.list = action.payload)
				: (state.completeList = action.payload);
		},
		convertWord: (state) => {
			state.isConvert = !state.isConvert;
		},
		addComplte: (
			state,
			action: PayloadAction<{ completeCard: CardType; newList: CardType[] }>
		) => {
			state.list = action.payload.newList;
			state.completeList.push(action.payload.completeCard);
		},
		addStudy: (
			state,
			action: PayloadAction<{ studyCard: CardType; newList: CardType[] }>
		) => {
			state.completeList = action.payload.newList;
			state.list.push(action.payload.studyCard);
		},
		changeStudy: (state) => {
			state.isStudy = !state.isStudy;
		},
		isAllOpen: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
});

export const {
	setList,
	convertWord,
	addComplte,
	addStudy,
	changeStudy,
	isAllOpen,
} = list.actions;
export default list.reducer;
