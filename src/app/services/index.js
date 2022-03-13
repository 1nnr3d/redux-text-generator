/* Libraries */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getParagraph = createAsyncThunk('generator/getParagraph/', async (paras) => {
  const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${paras}`);
  return res.data;
});