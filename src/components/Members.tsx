import { useSelector } from "react-redux";
import Member from "./Member";
import { StyledCardColumns, StyledLoader } from "./Styled";
import { IMember, MemberState } from "./Types";

const Members: React.FC<{}> = () => {
  const result = useSelector<MemberState, IMember[]>((state) => state.result);
  const loading = useSelector<MemberState, boolean>((state) => state.loading);

  return (
    <StyledCardColumns>
      {loading ? (
        <StyledLoader />
      ) : (
        result.map((member, index) => {
          return <Member member={member} key={index} />;
        })
      )}
    </StyledCardColumns>
  );
};

export default Members;
