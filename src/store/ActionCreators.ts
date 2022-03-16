import { DispatchType, MemberAction, SortType } from "../components/type";
import { Authorization, Uri } from "../Constant";
import * as actionTypes from "./ActionTypes";

export function fetchMembers() {
  const action: MemberAction = {
    type: actionTypes.FETCH_MEMBERS,
    payload: [],
  };

  return HttpRequest(action);
}
export function sortBy(option: SortType) {
  const action: MemberAction = {
    type: actionTypes.SORT_BY_NAME,
    payload: [],
  };
  if (option === "office") {
    action.type = actionTypes.SORT_BY_OFFICE;
  }
  return action;
}
export function filterBy(option: MemberAction) {
  const action: MemberAction = {
    type: actionTypes.FILTER,
    payload: option.payload,
  };
  return action;
}

export function Loading(isloading: boolean) {
  const action: MemberAction = {
    type: actionTypes.LOADING,
    payload: isloading,
  };
  return action;
}
export function HttpRequest(action: MemberAction) {
  return (dispatch: DispatchType) => {
    fetch(Uri, {
      headers: {
        authorization: Authorization,
      },
    })
      .then((reponse) => reponse)
      .then((data) => data.json())
      .then((r) => {
        action.payload = r;
        dispatch(action);
      });
  };
}
