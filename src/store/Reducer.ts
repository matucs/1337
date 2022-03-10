import { MemberAction, MemberState } from "../components/type";
import * as actionTypes from "./ActionTypes";

const initialState: MemberState = {
  members: [],
};

const Reducer = (
  state: MemberState = initialState,
  action: MemberAction
): MemberState => {
  switch (action.type) {
    case actionTypes.FETCH_MEMBERS:
      return {
        ...state,
      };
  }
  return state;
};

export default Reducer;
