import { useParams } from 'react-router'
import { useItem } from '../../../hooks/items'
import InfoPriceItem from '../InfoPriceItem/InfoPriceItem'
import './DetailItem.scss'
import { Helmet } from 'react-helmet'

const DetailItem = () => {
    const { id } = useParams()
    const { item } = useItem(id)

    return (
      <>
        {item &&
          <>
            <Helmet>
              <title>{item.title}</title>
            </Helmet>
            <div className='content-detail'>
              <div className='content-detail__first-column'>
                <div className='content-detail__wraper-img'>
                  <img className='content-detail__img' src={item.picture} alt={item.title} />
                </div>
                <div className='content-detail__info'>
                  <InfoPriceItem
                    title={item.title}
                    condition={item.condition}
                    price={item.price}
                    soldQuantity={item.sold_quantity}
                  />
                  <div className='content-detail__action'>
                    <button className='content-detail__btn-buy'>Comprar</button>
                  </div>
                </div>
              </div>
              <div className='content-detail__second-column'>
                <h2 className='content-detail__description-title'>Descripción del producto</h2>
                <p className='content-detail__description'>{item.description}</p>
              </div>
            </div>
          </>}
      </>
    )
}

export default DetailItem
