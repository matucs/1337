import React from "react";
import { IMember } from "./type";
import LazyLoad from "react-lazyload";
import {
  StyledCard,
  StyledCardImg,
  StyledCardInfo,
  StyledCardTitle,
  StyledMoreInfo,
  StyledSocialMedia,
} from "./Style";
import { WEBSITE_URL } from "./Constant";

type Props = {
  member: IMember;
};

export const Card: React.FC<Props> = ({ member }) => {
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
              <a href={member.linkedIn}>
                <i
                  className="icon fa fa-linkedin-square"
                  aria-hidden="true"></i>
              </a>
              <a href={member.gitHub}>
                <i className="icon fa fa-github" aria-hidden="true"></i>
              </a>
              <a href={member.twitter}>
                <i className="icon fa fa-twitter" aria-hidden="true"></i>
              </a>
            </StyledSocialMedia>
          </StyledCardInfo>
          <StyledMoreInfo
            href={`${WEBSITE_URL}/meet/${member.name.replace(" ", "-")}`}>
            Get to know me
          </StyledMoreInfo>
          <h5>Office: {member.office}</h5>
        </>
      </LazyLoad>
    </StyledCard>
  );
};

export default Card;
