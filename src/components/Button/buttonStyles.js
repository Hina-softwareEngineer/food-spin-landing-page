import styled from 'styled-components';

export const ButtonPrimaryStyled = styled.button`
    width: 163px;
    height: 48px;

    background: ${(props) => props.color};
    box-shadow: 0px 20px 40px
      ${(props) => (props.color === '#FF922C' ? '#F4E2D1' : '#DBF4D1')};
    border-radius: 69px;

    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    /* identical to box height */
    text-transform: capitalize;

    color: #ffffff;
    outline: none;
    border: none;

    &:focus, &:active{
        outline:none;
        border:none;
    }
`;