import ItemCard from '../ItemList/ItemList'

const Result = ({ items = [] }) => {
    return (
      <section>
        <ol>
          {items?.map(item => (<ItemCard key={item.id} {...item} />))}
        </ol>
      </section>
    )
}

export default Result
