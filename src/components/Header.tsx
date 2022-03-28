import React from "react";
import Logo from "./assets/logo.svg";
import { StyledHeadeCaption, StyledHeaderTitle, StyledHero } from "./Styled";
const Header: React.FC<{}> = () => {
  return (
    <StyledHero>
      <a href={process.env.REACT_APP_WS_URI}>
        <img src={Logo} alt="logo" />
      </a>
      <StyledHeaderTitle>
        <h1>Meet our colleagues</h1>
      </StyledHeaderTitle>
      <StyledHeadeCaption>
        <h2>a familly of handpicked specialists</h2>
      </StyledHeadeCaption>
    </StyledHero>
  );
};
export default Header;
