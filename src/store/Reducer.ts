import { IMember, MemberAction, MemberState } from "../components/Types";
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
      return { ...state, result: action.payload , members: action.payload, loading: false};
    case actionTypes.SORT_BY_NAME:
      const _newState: IMember[] = state.members.slice() ;
      _newState.sort((a:IMember, b:IMember) => (a.name > b.name ? 1 : -1));
      return { ...state, result: _newState };
    case actionTypes.SORT_BY_OFFICE:
      const newState: IMember[] = state.members.slice();
      newState.sort((a:IMember, b:IMember) => (a.office > b.office ? 1 : -1));
      return { ...state, result: newState };
    case actionTypes.FILTER:
      let result = state.members.slice();
      if (action.filter.name !== "" || action.filter.office !== "") {
        result = result.filter((m) =>
          m.name?.toLowerCase().includes(action.filter.name.toLowerCase()) && 
          m.office?.toLowerCase().includes(action.filter.office.toLowerCase())
        );
      }
      return { ...state, result: result };
    case actionTypes.LOADING:
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};

export default Reducer;
