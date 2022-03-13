import { createSlice } from "@reduxjs/toolkit";
import { getParagraph } from "../services";

export const generatorSlice = createSlice({
  name: 'generator',
  initialState: {
    text: [],
    htmlInc: "text"
  },
  reducers: {
    changeType: (state, action) => { // Changing HTML Include State
      state.htmlInc = action.payload;
    }
  },
  extraReducers: {
    [getParagraph.fulfilled]: (state, action) => { // Transfer incoming paragraph
      state.text = action.payload
    }
  }
})

export const { changeType } = generatorSlice.actions;
export default generatorSlice.reducer;