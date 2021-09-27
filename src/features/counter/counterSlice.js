import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 10,
  status: 'idle',
};


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
  
      state.value += 5;
    },
    reset: (state) => {
      state.value = 10;
    }
  },
 
});

export const {increment,reset} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;



export default counterSlice.reducer;
