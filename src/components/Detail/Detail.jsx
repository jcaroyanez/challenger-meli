import { useNavigate } from 'react-router'
import Search from '../Search/Search'
import Container from '../shared/Container/Container'
import Header from '../shared/Header/Header'
import DetailItem from './DetailItem/DetailItem'

const Detail = () => {
  const navigate = useNavigate()
  const onInputValue = textValue => {
    navigate(`/items?search=${textValue}`)
  }
  return (
    <>
      <Header>
        <Search onInputValue={onInputValue} />
      </Header>
      <Container>
        <DetailItem />
      </Container>
    </>
  )
}

export default Detail
