import styled from "styled-components";

export const StyledContainer = styled.div`
  .container {
    section.hero.short {
      min-height: 300px;
      height: 300px;
    }
    .more-info {
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
    }
    .filter {
      padding: 10px;
      margin-top: 10px;
      margin-left: 10px;
      border: 1px solid #099;
      border-radius: 20px;
      display: flex;
      gap: 10px;
      flex-direction: row;
    }
    section.hero {
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
    }
    section.hero:after {
      animation: vignette-in 1.3s ease-in 0.5s 1 forwards;
      top: 0;
      height: 100%;
      width: 100%;
      background: transparent;
      display: block;
      opacity: 0;
      box-shadow: inset 0 0 14rem rgb(0 43 85 / 80%);
    }
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
    .sort-by {
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
    }
    .filter-by-name {
      display: flex;
      flex-direction: row;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    .filter-by-office {
      display: flex;
      flex-direction: row;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
    section {
      .sitetitle {
        font-weight: bold;
        font-size: xx-large;
      }
    }
    .title {
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
    }
    .caption {
      text-align: center;
      h2 {
        font-weight: 300;
        letter-spacing: 0.03em;
        color: white;
      }
    }
    .card-columns {
      display: flex;
      gap: 5px;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      .card {
        width: 14rem;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 2px;
        .card-img-top {
          height: 300px;
          display: block;
          max-width: 100%;
          max-height: 100%;
          img {
            object-fit: cover;
            width: 100%;
            height: 300px;
          }
        }
      }
      .info {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
      }
      .card-title {
        max-width: 35%;
        margin-left: 2px;
      }
      .social-media {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 80px;
        margin-top: 20px;
        .icon {
          margin-left: 5px;
        }
      }
    }
  }
`;
export const StyledFooter = styled.div`
  .footer {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding-top: 15px;
    padding-bottom: 12px;
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.44);
    margin-top: 50px;
  }
`;
