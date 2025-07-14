import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUpdates = createAsyncThunk(
  'updates/fetchUpdates',
  async () => {
    const res = await fetch("/api/updates");
    const data = await res.json();
    return data.updates;
  }
);

const updateSlice = createSlice({
  name: 'updates',
  initialState: {
    list: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpdates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUpdates.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.list = action.payload;
      })
      .addCase(fetchUpdates.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  }
});

export default updateSlice.reducer;
