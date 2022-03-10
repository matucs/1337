import { DispatchType } from "../components/type";
import { Authorization, Uri } from "../Constant";
import * as actionTypes from "./ActionTypes";

export function fetchMembers() {
  return HttpRequest();
}

export function HttpRequest() {
  return (dispatch: DispatchType) => {
    fetch(Uri, {
      headers: {
        Authorization: Authorization,
      },
    }).then((data) => console.log(data));
  };
}
