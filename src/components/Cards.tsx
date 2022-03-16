import { useSelector } from "react-redux";
import Card from "./Card";
import { StyledCardColumns, StyledLoader } from "./Style";
import { IMember, MemberState } from "./type";

function Cards() {
  const result = useSelector<MemberState, IMember[]>((state) => state.result);
  const loading = useSelector<MemberState, boolean>((state) => state.loading);

  return (
    <StyledCardColumns>
      {loading ? (
        <StyledLoader />
      ) : (
        result.map((member, index) => {
          return <Card member={member} key={index} />;
        })
      )}
    </StyledCardColumns>
  );
}

export default Cards;
