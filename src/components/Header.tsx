import React from "react";
import { WEBSITE_URL } from "./Constant";
import Logo from "./assets/logo.svg";
import { StyledHeadeCaption, StyledHeaderTitle, StyledHero } from "./Style";
function Header() {
  return (
    <StyledHero>
      <a href={WEBSITE_URL}>
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
}
export default Header;
