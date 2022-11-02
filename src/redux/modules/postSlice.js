import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __imgPost = createAsyncThunk(
  "IMG_POST",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const imgPost = await axios({
        method: "post",
        url: `http://localhost:3001/posts`,
        // http://3.38.93.252/bunjang/posts
        data: payload,
        headers: {
          "Content-Type": "multipart/form-data",
          //   Authorization: `${getCookie("token")}`,
        },
      });
      return thunkAPI.fulfillWithValue(imgPost.data);
    } catch (error) {
      console.log("글 작성 post요청 에러");
    }
  }
);
export const __imgGet = createAsyncThunk(
  "IMG_GET",
  async (payload, thunkAPI) => {
    try {
      const getPost = await axios({
        method: "get",
        url: `http://localhost:3001/posts`,
        payload,
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `${getCookie("token")}`,
        //     payload,
        //   },
      });
      console.log(getPost.data);
      return thunkAPI.fulfillWithValue(getPost.data);
    } catch (error) {
      console.log("메인 get요청 에러");
    }
  }
);

export const __writePost = createAsyncThunk(
  "WRITE_POST",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const post = await axios({
        method: "post",
        url: `http://localhost:3001/posts`,
        data: payload,
        // http://3.38.93.252/bunjang/posts
        // headers: {
        //   "Content-Type": "multipart/form-data",
        //   //   Authorization: `${getCookie("token")}`,
        // },
      });
      return thunkAPI.fulfillWithValue(post.data);
    } catch (error) {
      console.log("글 작성 post요청 에러");
    }
  }
);

export const __mainGet = createAsyncThunk(
  "MAIN_GET",
  async (payload, thunkAPI) => {
    try {
      const getPost = await axios({
        method: "get",
        url: `http://localhost:3001/posts`,
        data: payload,
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `${getCookie("token")}`,
        //     payload,
        //   },
      });
      console.log(getPost.data);
      return thunkAPI.fulfillWithValue(getPost.data);
    } catch (error) {
      console.log("메인 get요청 에러");
    }
  }
);

const initialState = {
  list: [],
};

const PostSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [__imgPost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = [state.list, action.payload.data];
    },
    [__writePost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = [state.list, action.payload.data];
    },
    [__imgGet.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [__mainGet.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const {} = PostSlice.actions;
export default PostSlice.reducer;
