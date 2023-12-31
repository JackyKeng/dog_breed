import { createSlice } from '@reduxjs/toolkit';

export const spinnerSlice = createSlice({
	name: 'spinner',
	initialState: {
		show: false
	},
	reducers: {
		showSpinner: state => {
			state.show = true;
		},
		hideSpinner: state => {
			state.show = false;
		}
	}
});

export const { showSpinner, hideSpinner } = spinnerSlice.actions;
export default spinnerSlice.reducer;
