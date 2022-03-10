import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import { StyledContainer, StyledFooter } from "./Style";

function Container() {
  return (
    <>
      <StyledContainer>
        <div className="container">
          <Header />
          <section >
            <div className="section-title">
              <h2>
                <span>team</span>
              </h2>
            </div>
            <Cards />
          </section>
        </div>
      </StyledContainer>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  );
}

export default Container;
