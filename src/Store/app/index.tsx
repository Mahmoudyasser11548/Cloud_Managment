import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AppState {
    theme: string
    language: string;
    direction: 'ltr' | 'rtl';
  }
const initialState: AppState = {
    theme: "light",
    language: 'en',
    direction: localStorage.getItem("direction") || 'ltr',
}

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<string>) {
            state.language = action.payload;
            state.direction = action.payload === 'ar' ? 'rtl' : 'ltr';
            localStorage.setItem("language", state.language);
            localStorage.setItem("direction", state.direction);


            document.getElementsByTagName("html")[0].setAttribute("dir", state.direction);
            document.getElementsByTagName("body")[0].setAttribute("dir", state.direction);
            document.getElementsByTagName("body")[0].setAttribute("direction", state.direction);
            document.getElementsByClassName("fui-FluentProvider")[0].setAttribute("dir", state.direction)
        },
        changeTheme(state, action: PayloadAction<string>) {
            state.theme = action.payload;
        }
    }
})

export const {setLanguage, changeTheme} = appSlice.actions
export default appSlice.reducer