import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import history from '../../assets/history.svg'
import Time from '../../assets/time.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt=""></img>
      <nav>
        <NavLink to="/" title="Timer">
          <img src={Time} alt=""></img>
        </NavLink>
        <NavLink to="/history">
          <img src={history} alt="History"></img>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
