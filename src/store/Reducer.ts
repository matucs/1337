import { IMember, MemberAction, MemberState } from "../components/type";
import * as actionTypes from "./ActionTypes";

const initialState: MemberState = {
  members: [],
  result: [],
  loading: true,
};
const Reducer = (
  state: MemberState = initialState,
  action: MemberAction
): MemberState => {
  switch (action.type) {
    case actionTypes.FETCH_MEMBERS:
      return { ...state, result: action.payload , members: action.payload};
    case actionTypes.SORT_BY_NAME:
      const _newState: IMember[] = state.members.slice() ;
      _newState.sort((a, b) => (a.name > b.name ? 1 : -1));
      return { ...state, result: _newState };
    case actionTypes.SORT_BY_OFFICE:
      const newState: IMember[] = state.members.slice();
      newState.sort((a, b) => (a.office > b.office ? 1 : -1));
      return { ...state, result: newState };
    case actionTypes.FILTER:
      let result = state.members.slice();
      if (action.payload.name !== "" || action.payload.office !== "") {
        result = result.filter((m) =>
          m.name?.toLocaleLowerCase().includes(action.payload.name) && 
          m.office?.toLocaleLowerCase().includes(action.payload.office)
        );
      }
      return { ...state, result: result };
    case actionTypes.LOADING:
      return { ...state, loading: true };
    case actionTypes.LOADED_SUCCCESS:
      return { ...state, loading: false };
    default:
      return { ...state };
  }
};

export default Reducer;
