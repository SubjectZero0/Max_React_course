import { configureStore, createSlice } from "@reduxjs/toolkit";

// -----------------------------------------------------------------

// create counter slice
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.counter++;
		},

		decrement(state) {
			state.counter--;
		},

		toggle(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

// --------------------------------------------------------------------

// create reducer
const stateStore = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
});
// --------------------------------------------------------------------
// export actions to use in components, and store
export const counterActions = counterSlice.actions;
export default stateStore;
