import styled from 'styled-components';

export const ArrowControlsStyled = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80%;
    margin-left: auto;
    margin-right: 7%;

    .left-arrow,
    .right-arrow {
      margin-right: 0;
      text-align: center;
      font-size: 30px;
      cursor: pointer;
      color: ${(props) => props.color};
    }

    .right-arrow {
      padding-left: 80px;
    }
  }
`;
