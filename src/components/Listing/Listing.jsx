import { useNavigate, useSearchParams } from 'react-router-dom'
import { useItems } from '../../hooks/items'
import Search from '../Search/Search'
import BreadCrumbs from '../shared/BreadCrumbs/BreadCrumbs'
import Container from '../shared/Container/Container'
import Header from '../shared/Header/Header'
import Result from './Results/Results'
import { Helmet } from 'react-helmet'

const Listing = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const inputValue = searchParams.get('search') || ''
  const data = useItems(inputValue)

  const onInputValue = textValue => {
    navigate(`/items?search=${textValue}`)
  }

  return (
    <>
      <Header>
        <Helmet>
          <title>{inputValue} | Mercado Libre</title>
        </Helmet>
        <Search inputValue={inputValue} onInputValue={onInputValue} />
      </Header>

      <Container>
        {data?.categories && <BreadCrumbs categories={data?.categories} />}
        {data?.items && <Result items={data.items} />}
      </Container>
    </>
  )
}

export default Listing
