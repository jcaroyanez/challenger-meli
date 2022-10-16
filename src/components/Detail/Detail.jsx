import { useParams } from 'react-router'
import { useItem } from '../../hooks/items'
import Container from '../shared/Container/Container'
import DetailItem from './DetailItem/DetailItem'

const Detail = () => {
  const { id } = useParams()
  const { item } = useItem(id)

  return (
    <>
      <Container>
        <DetailItem item={item} />
      </Container>
    </>
  )
}

export default Detail
