import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";


const reducers = combineReducers({
    home: HomeReducer,
});

export default reducers;