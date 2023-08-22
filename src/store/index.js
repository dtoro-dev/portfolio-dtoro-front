import { configureStore } from "@reduxjs/toolkit";

const persistanceMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
	reducer: {
		// reducers
    
	},
	middleware: [persistanceMiddleware],
});
