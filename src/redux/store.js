import { createStore, combineReducers } from "@reduxjs/toolkit";
import rockets from "./rockets/rockets";
import missions from "./missions/missions";
const rootReducer = combineReducers(
    {
        rockets,
        missions
    }
)
const store = createStore(rootReducer,{})

export default store;