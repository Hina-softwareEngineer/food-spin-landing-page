import styled from 'styled-components';

export const LandingPageWrapper = styled.div`
    height: 100vh;
    font-family : Poppins;

`;

export const ContentBoxStyled = styled.div`
  margin-top: 12%;
  margin-left: 100px;
  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 66px;

    text-transform: capitalize;

    color: ${(props) => props.color};
  }
  h2 {
    max-width: 367px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 50px;
    text-transform: capitalize;

    color: #333333;
  }
  p {
    max-width: 347px;
    ont-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    display: flex;
    align-items: flex-end;
    text-transform: capitalize;

    color: #333333;
  }
`;

