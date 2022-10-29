import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invite: [],
};

export const inviteSlice = createSlice({
  name: "invite",
  initialState,
  reducers: {
    setInvite: (state, action) => {
      state.invite = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInvite } = inviteSlice.actions;

export const selectInvite = (state) => state.invite.invite;

export default inviteSlice.reducer;
