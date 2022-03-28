import { DispatchType, MemberAction, SortType } from "../components/Types";
import * as actionTypes from "./ActionTypes";

export const fetchMembers: () => (dispatch: DispatchType) => void = () => {
  const action: MemberAction = {
    type: actionTypes.FETCH_MEMBERS,
    payload: [],
    isLoading: false,
    filter: { name: "", office: "" },
  };

  return HttpRequest(action);
};
export const sortBy: (option: SortType) => MemberAction = (
  option: SortType
) => {
  const action: MemberAction = {
    type: actionTypes.SORT_BY_NAME,
    payload: [],
    isLoading: false,
    filter: { name: "", office: "" },
  };
  if (option === "office") {
    action.type = actionTypes.SORT_BY_OFFICE;
  }
  return action;
};
export const filterBy: (option: MemberAction) => MemberAction = (
  option: MemberAction
) => {
  return { ...option, type: actionTypes.FILTER };
};

export const Loading: (isloading: boolean) => MemberAction = (
  isloading: boolean
) => {
  const action: MemberAction = {
    type: actionTypes.LOADING,
    payload: [],
    isLoading: isloading,
    filter: { name: "", office: "" },
  };
  return action;
};
export const HttpRequest: (
  action: MemberAction
) => (dispatch: DispatchType) => void = (action: MemberAction) => {
  return (dispatch: DispatchType) => {
    fetch(process.env.REACT_APP_API_URI as string, {
      headers: {
        authorization: process.env.REACT_APP_API_KEY as string,
      },
    })
      .then((reponse) => reponse)
      .then((data) => data.json())
      .then((r) => {
        action.payload = r;
        dispatch(action);
      });
  };
};
