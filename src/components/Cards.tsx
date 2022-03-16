import { useSelector } from "react-redux";
import Card from "./Card";
import { IMember, MemberState } from "./type";

function Cards() {
  const result = useSelector<MemberState, IMember[]>((state) => state.result);

  return (
    <div className="card-columns">
      {result?.map((member, index) => {
        return <Card member={member} key={index} />;
      })}
    </div>
  );
}

export default Cards;
