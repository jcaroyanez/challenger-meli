/* eslint-disable multiline-ternary */
import { useItems } from '../../hooks/items'
import BreadCrumbs from '../shared/BreadCrumbs/BreadCrumbs'
import Container from '../shared/Container/Container'
import Result from './Results/Results'
import { Helmet } from 'react-helmet-async'
import { useSeachContext } from '../../context/search'
import SkeletonList from './SkeletonList/SkeletonList'

const Listing = () => {
   const { textSearch } = useSeachContext()
   const { data, error } = useItems(textSearch)
   const loading = !data && !error

  return (
    <Container>
      <Helmet>
        <title>{textSearch} | Mercado Libre</title>
        <meta name='description' content={textSearch} />
      </Helmet>

      {loading ? <SkeletonList /> : (
        <>
          <BreadCrumbs categories={data?.categories} />
          <Result items={data?.items} />
        </>
      )}
    </Container>
  )
}

export default Listing
