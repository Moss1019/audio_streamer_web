import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./content";
import themeReducer from "./theme";

const store = configureStore({
    reducer: {
        content: contentReducer,
        theme: themeReducer
    }
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
