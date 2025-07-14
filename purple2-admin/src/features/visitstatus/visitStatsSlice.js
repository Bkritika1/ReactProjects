import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchVisitStats = createAsyncThunk(
  "visitStats/fetchVisitStats",
  async () => {
    const res = await fetch("/api/visit-stats");
    return await res.json();
  }
);

const visitStatsSlice = createSlice({
  name: "visitStats",
  initialState: { list: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVisitStats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVisitStats.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      });
  }
});

export default visitStatsSlice.reducer;
