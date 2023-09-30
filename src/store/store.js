import { combineReducers, createStore } from "redux";
import cocktailReducer from "../reducer/reducer";

const rootReducer = combineReducers({ cocktail: cocktailReducer });
const store = createStore(rootReducer);

export default store;
