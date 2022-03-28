import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { DispatchType, MemberAction, MemberState } from "../components/Types";
import reducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store: Store<MemberState, MemberAction> & {
  dispatch: DispatchType;
} = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
