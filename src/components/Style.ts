import styled from "styled-components";

export const StyledContainer = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    padding: 5rem;
    section {
      .sitetitle {
        font-weight: bold;
        font-size: xx-large;
      }
    }
    .lead {
      color: gray;
    }
    .card-columns {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      .card {
        width: 18rem;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 2px;
        .card-img-top {
          width: 100%;
        }
      }
      .info {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      .card-title {
        width: 50%;
      }
      .social-media {
        width: 50%;
        text-align: right;
        .icon {
          margin-left: 5px;
          flex: 50%;
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
