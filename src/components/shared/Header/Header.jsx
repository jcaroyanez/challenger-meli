import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import './Header.scss'

const Header = ({ children }) => {
    return (
      <header className='header'>
        <Container className='container-header'>
          <div className='header-content'>
            <Link to='/' className='header-content-link__logo' />
            {children}
          </div>
        </Container>
      </header>
    )
}

export default Header
