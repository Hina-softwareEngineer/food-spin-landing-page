import { ButtonPrimaryStyled } from './buttonStyles';

export function ButtonPrimary({ color, text, ...props }) { 
    return (<ButtonPrimaryStyled color={color} {...props}>{text}</ButtonPrimaryStyled>);
}