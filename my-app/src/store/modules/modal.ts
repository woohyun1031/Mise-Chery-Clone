import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: false,
	type: '',
};

const ModalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal(state, action) {
			state.isOpen = true;
			state.type = action.payload;
		},
		closeModal(state) {
			state.isOpen = false;
		},
	},
});

export const { openModal, closeModal } = ModalSlice.actions;

export default ModalSlice.reducer;
