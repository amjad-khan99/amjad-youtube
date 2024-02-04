import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state)=> {
            state.isMenuOpen = ! state.isMenuOpen;
        },
        collapseSideBar: (state)=> {
            state.isMenuOpen = false;
        }
    }
});

export const {collapseSideBar, toggleMenu} = appSlice.actions
export default appSlice.reducer;