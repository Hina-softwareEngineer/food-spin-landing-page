import styled from 'styled-components';

export const NavbarStyled = styled.div`
  padding: 47px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav-options {
    margin-left: -20%;
    ul {
      display: flex;
      margin: 0;
      justify-content: space-between;
      align-items: center;
      li {
        list-style-type: none;
        margin: 0 30px;
        cursor :pointer;
      }
    }
  }
`;
