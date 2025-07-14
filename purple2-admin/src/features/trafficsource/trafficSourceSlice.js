import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTrafficSources = createAsyncThunk(
  "traffic/fetchTrafficSources",
  async () => {
    const res = await fetch("/api/traffic-sources");
    return await res.json();
  }
);

const trafficSourceSlice = createSlice({
  name: "traffic",
  initialState: { list: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrafficSources.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrafficSources.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      });
  }
});

export default trafficSourceSlice.reducer;
