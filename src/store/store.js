import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import Reducer from "./redux/space/reducer";

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
