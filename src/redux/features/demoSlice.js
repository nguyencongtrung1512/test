//quan li số

import { createSlice } from "@reduxjs/toolkit"

const initialValue  = 0
//tao action như useState(0);

const demoSlice = createSlice({
    name: "demo",
    initialState: initialValue,
    //reducers là nơi setup cái slice
    reducers: {
        increment: (state) => {
            state = state + 1//tăng 1 đơn vị tri hien tai
            return state
        },
        decrement: (state) => {
            state = state - 1// giảm 1 đơn vị tri hien tai
            return state
        }
    },
});
export const { increment, decrement } = demoSlice.actions// được lưu vào action trong demoslice
export default demoSlice.reducer;