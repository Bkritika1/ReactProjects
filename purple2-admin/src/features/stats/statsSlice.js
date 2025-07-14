
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStats = createAsyncThunk("stats/fetch", async () => {
  const res = await fetch("/api/stats");
  const data = await res.json();
  return data.stats; // ✅ returns only the array
});

const statsSlice = createSlice({
  name: "stats",
  initialState: {
    list: [],
    status: "idle"
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.status = "success";
        state.list = action.payload; // ✅ FIXED: directly assign array
      })
      .addCase(fetchStats.rejected, (state) => {
        state.status = "failed";
      });
  }
});

export default statsSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchStats = createAsyncThunk("stats/fetch", async () => {
//   const res = await fetch("/api/stats");
//   const data = await res.json();
//   return data.stats;
// });

// const statsSlice = createSlice({
//   name: "stats",
//   initialState: {
//     list: [],
//     status: "idle"
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchStats.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchStats.fulfilled, (state, action) => {
//         state.status = "success";
//         state.list = action.payload.stats; 
//       })
//       .addCase(fetchStats.rejected, (state) => {
//         state.status = "failed";
//       });
//   }
// });

// export default statsSlice.reducer;
