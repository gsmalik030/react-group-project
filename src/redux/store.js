import { createStore, combineReducers,applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rockets from "./rockets/rockets";
import missions from "./missions/missions";
const rootReducer = combineReducers(
    {
        rockets,
        missions
    }
)
const store = createStore(rootReducer,applyMiddleware(thunk,logger))

export default store;