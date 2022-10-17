import Container from '../shared/Container/Container'
import './NotFound.scss'

const NotFound = () => {
    return (
      <Container>
        <div className='content-not-found'>
          <span className='content-not-found__code'>404</span>
          <h1 className='content-not-found__title'>Página no encontrada.</h1>
        </div>
      </Container>
    )
}

export default NotFound
