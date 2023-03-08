import { createStore, combineReducers,applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rockets from "./rockets/rockets";
import Missions from "../Pages/Missions";
const rootReducer = combineReducers(
    {
        rockets,
        Missions
    }
)
const store = createStore(rootReducer,applyMiddleware(thunk,logger))

export default store;