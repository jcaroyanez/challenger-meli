import { useParams } from 'react-router'
import { useItem } from '../../hooks/items'
import Container from '../shared/Container/Container'
import DetailItem from './DetailItem/DetailItem'
import SkeletonDetailItem from './SkeletonDetailItem/SkeletonDetailItem'

const Detail = () => {
  const { id } = useParams()
  const { data, error } = useItem(id)
  const loading = !data && !error

  return (
    <>
      <Container>
        {loading ? <SkeletonDetailItem /> : <DetailItem item={data?.item} />}
      </Container>
    </>
  )
}

export default Detail
