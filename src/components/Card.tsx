import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { Loading } from "../store/ActionCreators";
import { IMember } from "./type";
import LazyLoad from "react-lazyload";

type Props = {
  member: IMember;
};

export const Card: React.FC<Props> = ({ member }) => {

  return (
    <div className="card">
      <LazyLoad once>
        <div className="card-img-top">
          <img
            src={member.imagePortraitUrl ?? "assets/img/default.jpg"}
            alt={`${member.name}`}
          />
        </div>
        <div className="card-body">
          <div className="info">
            <div className="card-title">
              <h4>{member.name}</h4>
            </div>
            <div className="social-media">
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
            </div>
          </div>
          <a className="more-info" href={`https://tretton37.com/meet/${member.name.replace(' ','-')}`}>Get to know me</a>
          <h5 className="card-text">Office: {member.office}</h5>
        </div>
      </LazyLoad>
    </div>
  );
};

export default Card;
