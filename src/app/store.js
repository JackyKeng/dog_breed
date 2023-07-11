import { configureStore } from '@reduxjs/toolkit';
import spinnerReducer from '../features/spinnerSlice';

export default configureStore({
	reducer: {
		spinner: spinnerReducer
	}
});
