// // src/features/features/featureFlagsSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   newDashboard: false,
//   betaAccess: false,
// };

// const featureFlagsSlice = createSlice({
//   name: 'features',
//   initialState,
//   reducers: {
//     setFeatureFlags: (state, action) => {
//       return { ...state, ...action.payload };
//     }
//   }
// });

// export const { setFeatureFlags } = featureFlagsSlice.actions;
// export default featureFlagsSlice.reducer;



//featureFlagsSlice.jsx
import { useDispatch } from 'react-redux';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    newDashboard: false,
    betaAccess: false,
};

const featureFlagsSlice = createSlice({
    name: 'features',
    initialState,
    reducers: {
        setFeatureFlags: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { setFeatureFlags } = featureFlagsSlice.actions;
export default featureFlagsSlice.reducer;

//inside app of app.jsx

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(login({
            name: "Jason"
        }))
        dispatch(showNotification({
            message: "Logged in successfully",
            type: "success"
        }))
        dispatch(setFeatureFlags({
            newDashboard: true
        }))
    },[dispatch])