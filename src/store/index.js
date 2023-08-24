import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from "./pages/slice";
import themeReducer from "./theme/slice";

const persistanceMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem(import.meta.env.VITE_REDUX_STATE, JSON.stringify(store.getState()));
};

const store = configureStore({
	reducer: {
		// reducers
    theme: themeReducer,
		pages: pagesReducer
	},
	middleware: [persistanceMiddleware],
});


export default store;
