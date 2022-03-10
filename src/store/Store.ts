import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { DispatchType, MemberAction, MemberState } from "../components/type";
import reducer from "./Reducer";

export const store: Store<MemberState, MemberAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));
