import { configureStore } from "@reduxjs/toolkit";
import inviteReducer from "./feature/inviteSlice";

export const store = configureStore({
    reducer: {
        invite: inviteReducer,
    },
});