import React from "react";
import { IMember } from "./Types";
import LazyLoad from "react-lazyload";
import {
  StyledCard,
  StyledCardImg,
  StyledCardInfo,
  StyledCardTitle,
  StyledMoreInfo,
  StyledSocialMedia,
} from "./Styled";

type Props = {
  member: IMember;
};

export const Member: React.FC<Props> = ({ member }) => {
  return (
    <StyledCard>
      <LazyLoad once>
        <StyledCardImg>
          <img
            src={member.imagePortraitUrl ?? "assets/img/default.jpg"}
            alt={`${member.name}`}
          />
        </StyledCardImg>
        <>
          <StyledCardInfo>
            <StyledCardTitle>
              <h4>{member.name}</h4>
            </StyledCardTitle>
            <StyledSocialMedia>
              <a href={process.env.REACT_APP_LINKEDIN_URI + member.linkedIn}>
                <i
                  className="icon fa fa-linkedin-square"
                  aria-hidden="true"></i>
              </a>
              <a href={process.env.REACT_APP_GITHUB_URI + member.gitHub}>
                <i className="icon fa fa-github" aria-hidden="true"></i>
              </a>
              <a href={process.env.REACT_APP_TWITER_URI + member.twitter}>
                <i className="icon fa fa-twitter" aria-hidden="true"></i>
              </a>
            </StyledSocialMedia>
          </StyledCardInfo>
          <StyledMoreInfo
            href={`${process.env.REACT_APP_WS_URI}/meet/${member.name.replace(
              " ",
              "-"
            )}`}>
            Get to know me
          </StyledMoreInfo>
          <h5>Office: {member.office}</h5>
        </>
      </LazyLoad>
    </StyledCard>
  );
};

export default Member;
