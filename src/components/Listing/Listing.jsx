import { useItems } from '../../hooks/items'
import BreadCrumbs from '../shared/BreadCrumbs/BreadCrumbs'
import Container from '../shared/Container/Container'
import Result from './Results/Results'
import { Helmet } from 'react-helmet-async'
import { useSeachContext } from '../../context/search'

const Listing = () => {
   const { textSearch } = useSeachContext()
   const data = useItems(textSearch)

  return (
    <Container>
      <Helmet>
        <title>{textSearch} | Mercado Libre</title>
      </Helmet>
      {data?.categories && <BreadCrumbs categories={data?.categories} />}
      {data?.items && <Result items={data.items} />}
    </Container>
  )
}

export default Listing
