import Search from '../Search/Search'
import Header from '../shared/Header/Header'
import { Outlet, useNavigate } from 'react-router'
import { useSeachContext } from '../../context/search'

const Home = () => {
  const navigate = useNavigate()
  const { textSearch } = useSeachContext()

  const onInputValue = textValue => {
    navigate(`/items?search=${textValue}`)
  }

  return (
    <>
      <Header>
        <Search inputValue={textSearch} onInputValue={onInputValue} />
      </Header>
      <Outlet />
    </>
  )
}

export default Home
