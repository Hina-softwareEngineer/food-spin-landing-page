import { NavbarStyled } from './navBarStyles';
import Logo from '../../assets/logo.png';

export function Navbar() {
  return (
    <NavbarStyled>
      <img src={Logo} alt='' />
      <div className='nav-options'>
        <ul>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
      </div>
      <div className='cart-icon'>
        <i className='bi bi-bag'></i>
      </div>
    </NavbarStyled>
  );
}
