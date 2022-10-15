import Search from '../Search/Search'
import Container from '../shared/Container/Container'
import Header from '../shared/Header/Header'
import DetailItem from './DetailItem/DetailItem'

const Detail = () => {
  const onInputValue = textValue => {
    console.log(textValue)
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
