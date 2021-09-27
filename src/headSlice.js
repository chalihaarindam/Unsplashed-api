import {  createSlice } from '@reduxjs/toolkit';

export const headSlice = createSlice({
  name: 'head',
  initialState: {
      value: null,
      title: "",
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setHead: (state,action) => {
    
      state.value = action.payload.val;
    },
    setTitle: (state,action) => {
            state.title = action.payload.temp;
    },
  },
});

export const { setHead , emptyHead, setTitle} = headSlice.actions;


export const selectHead = (state) => state.head;


export default headSlice.reducer;