import Search from '../Search/Search'
import Header from '../shared/Header/Header'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  const onInputValue = textValue => {
    navigate(`/items?search=${textValue}`)
  }

  return (
    <>
      <Header>
        <Search onInputValue={onInputValue} />
      </Header>
    </>
  )
}

export default Home
