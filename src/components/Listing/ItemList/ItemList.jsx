import { Link } from 'react-router-dom'
import CircleTransport from '../CircleTranspor/CircleTransport'
import './ItemList.scss'

const ItemList = ({ id, title, picture, price, free_shipping, state_name }) => {
    return (
      <li className='search-list-item'>
        <Link to={`/items/${id}`} className='search-list-item__link'>
          <div className='search-list-item__card'>
            <span className='search-list-item__card-state'>{state_name}</span>
            <img width={160} height={160} src={picture} alt={title} />
            <div className='search-list-item__card-content-info'>
              <div className='search-list-item__card-content-price'>
                <span className='price-simbol'>$</span>
                <span className='price-mount'>{price.amount}</span>
                {free_shipping && <CircleTransport />}
              </div>
              <h3 className='search-list-item__title'>{title}</h3>
            </div>
          </div>
        </Link>
      </li>
    )
}

export default ItemList
