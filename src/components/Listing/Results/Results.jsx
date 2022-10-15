import ItemCard from '../ItemList/ItemList'
import './Result.scss'

const Result = ({ items = [] }) => {
    return (
      <section>
        <ol className='list-item'>
          {items?.map(item => (<ItemCard key={item.id} {...item} />))}
        </ol>
      </section>
    )
}

export default Result
