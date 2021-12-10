import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: { uid: "", photoUrl: "", displayName: "" },
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        login: (state, action) => {
            // receive action too
            // React componentからdispathが呼び出されるとき引数としてfirebaseから取得したuser情報をactionのペイロードに渡す
            state.user = action.payload; // 認証できたときReduxのstateに反映させることができる
        },
        logout: (state) => {
            // 初期化する
            state.user = { uid: "", photoUrl: "", displayName: "" };
        },
    },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
