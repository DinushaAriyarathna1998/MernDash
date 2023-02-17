import { createSlice } from "@reduxjs/toolkit";
// Group together the reducer logic and actions in a single feature on a single file

// create initial state
const initialState = {
    mode: "dark",
    userID: "63701cc1f03239b7f700000e"
};

// createSlice is a function from redux toolkit
//accepts an object
//requares a name, initalstate and reducer 
export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light' ? "dark" : "light";
        }
    }
})

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;