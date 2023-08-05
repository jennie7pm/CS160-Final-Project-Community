import { configureStore } from '@reduxjs/toolkit'
import resourcesBodyReducer from "../feature/resources-body/resourcesbodySlice";
export const store = configureStore({
    reducer: {
        resourceBody: resourcesBodyReducer
    }
})