import { useNavigate, useSearchParams } from 'react-router-dom'
import useItems from '../../hooks/items'
import Search from '../Search/Search'
import Container from '../shared/Container/Container'
import Header from '../shared/Header/Header'
import Result from './Results/Results'

const Listing = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const inputValue = searchParams.get('search') || ''
  const data = useItems(inputValue)
  console.log({ data })

  const onInputValue = textValue => {
    navigate(`/items?search=${textValue}`)
  }

  return (
    <>
      <Header>
        <Search inputValue={inputValue} onInputValue={onInputValue} />
      </Header>
      <Container>
        {data?.items && <Result items={data.items} />}
      </Container>
    </>
  )
}

export default Listing
