/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchItemById, fetchAllItems, deleteAndGetItems } from './itemsAPI';

export const getItemById = createAsyncThunk('items/getItemById', async (id) => {
  const item = await fetchItemById(id);
  return item;
});

export const getAllItems = createAsyncThunk('items/getAllItems', async () => {
  const items = await fetchAllItems();
  return items;
});

export const deleteItem = createAsyncThunk('deleteLists/deleteItem', async (id) => {
  const newData = deleteAndGetItems(id);
  return newData;
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    status: null,
    item: {},
  },
  extraReducers: {
    [getItemById.pending]: (state) => {
      state.status = 'loading';
    },
    [getItemById.fulfilled]: (state, { payload }) => {
      state.item = payload;
      state.status = 'success';
    },
    [getItemById.rejected]: (state) => {
      state.status = 'failed';
    },
    [getAllItems.pending]: (state) => {
      state.status = 'loading';
    },
    [getAllItems.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.status = 'success';
    },
    [getAllItems.rejected]: (state) => {
      state.status = 'failed';
    },
    [deleteItem.pending]: (state) => {
      state.status = 'loading';
    },
    [deleteItem.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.status = 'success';
    },
  },
});

export default itemsSlice.reducer;
