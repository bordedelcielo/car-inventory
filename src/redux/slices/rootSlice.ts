// export {}

import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        car_brand: "Ford",
        car_model: "Mustang",
        car_color: "black",
        car_price: 40000.00, 
        car_description: "Yeah"
    },
    reducers: {
        chooseCar_brand: (state, action) => { state.car_brand = action.payload }, // Not super confident about state.car_brand. 
        // In Terrell's in-class code, the drones had key 'name' and Terrell used state.name instead of state.car_brand
        chooseCar_model: (state, action) => { state.car_model = action.payload }
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseCar_brand, chooseCar_model } = rootSlice.actions;
