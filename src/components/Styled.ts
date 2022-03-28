import styled from "styled-components";

export const StyledContainer = styled.div`
  svg {
    width: 150px;
    margin-top: 90px;
    margin-left: 30px;
    color: white;
  }
  a {
    color: #80c565;
    background: transparent;
    text-decoration: none;
    display: block;
    position: relative;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  svg:not(:root) {
    overflow: hidden;
  }
  section {
    .sitetitle {
      font-weight: bold;
      font-size: xx-large;
    }
  }
  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const StyledMoreInfo = styled.a`
  background-color: #80c565;
  border-radius: 3px;
  border: 1px solid #002b55;
  width: 130px;
  color: #002b55;
  text-align: center;
  :hover {
    background-color: #002b55;
    border: 1px solid #80c565;
    color: white;
  }
`;
export const StyledLoader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
`;
export const StyledCardColumns = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const StyledCard = styled.div`
  width: 14rem;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2px;
`;
export const StyledCardImg = styled.div`
  height: 300px;
  display: block;
  max-width: 100%;
  max-height: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 300px;
  }
`;
export const StyledSocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 80px;
  margin-top: 20px;
  .icon {
    margin-left: 5px;
  }
`;
export const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;
export const StyledCardTitle = styled.div`
  max-width: 35%;
  margin-left: 2px;
`;
export const StyledFilter = styled.div`
  padding: 10px;
  margin-top: 10px;
  margin-left: 10px;
  border: 1px solid #099;
  border-radius: 20px;
  display: flex;
  gap: 10px;
  flex-direction: row;
`;
export const StyledSortBy = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  select {
    width: 200px;
    background-color: gainsboro;
    text-align: center;
    border-radius: 3px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: large;
  }
`;
export const StyledFilterByName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const StyledFilterByOffice = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export const StyledHeadeCaption = styled.div`
  text-align: center;
  h2 {
    font-weight: 300;
    letter-spacing: 0.03em;
    color: white;
  }
`;
export const StyledHeaderTitle = styled.div`
  color: #80c565;
  text-shadow: 0px 1px 2px black;
  font-weight: 700;
  text-align: center;
  h1 {
    font-weight: 500;
    text-transform: lowercase;
    margin: 0;
    font-size: 3rem;
    text-shadow: 0 0 3px rgb(0 43 85 / 65%);
    letter-spacing: 0;
  }
`;
export const StyledHero = styled.section`
  top: 0;
  display: block;
  z-index: 1;
  transition-property: height;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
  position: relative;
  background-position: center 50%;
  border-bottom: 6px solid #80c565;
  background-image: url("https://tretton37.com/assets/i/meet_w640.jpg");
  background-size: contain;
  background-color: #002b55;
  img {
    width: 200px;
    margin-top: 70px;
    margin-left: 50px;
  }
  :after {
    animation: vignette-in 1.3s ease-in 0.5s 1 forwards;
    top: 0;
    height: 100%;
    width: 100%;
    background: transparent;
    display: block;
    opacity: 0;
    box-shadow: inset 0 0 14rem rgb(0 43 85 / 80%);
  }
`;
export const StyledFooter = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding-top: 15px;
    padding-bottom: 12px;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.44);
    margin-top: 50px;
`;
