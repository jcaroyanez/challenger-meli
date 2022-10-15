import { Link } from 'react-router-dom'
import './ItemList.scss'

const ItemList = ({ title, picture, price, state_name }) => {
    return (
      <li className='search-list-item'>
        <Link className='search-list-item__link'>
          <div className='search-list-item__card'>
            <span className='search-list-item__card-state'>{state_name}</span>
            <img width={160} height={160} src={picture} />
            <div className='search-list-item__card-content-info'>
              <div>
                <span className='price-simbol'>$</span>
                <span className='price-mount'>{price.amount}</span>

              </div>
              <h3 className='search-list-item__title'>{title}</h3>
            </div>
          </div>
        </Link>
      </li>
    )
}

export default ItemList
