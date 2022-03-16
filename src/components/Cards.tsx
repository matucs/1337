import {  useSelector } from "react-redux";
import Card from "./Card";
import { IMember, MemberState } from "./type";

function Cards() {
  const result = useSelector<MemberState, IMember[]>((state) => state.result);
  const loading = useSelector<MemberState, boolean>((state) => state.loading);

  return (
    <div className="card-columns">
      {loading ? (
        <h1 className="loader"></h1>
      ) : (
        result.map((member, index) => {
          return <Card member={member} key={index} />;
        })
      )}
    </div>
  );
}

export default Cards;
