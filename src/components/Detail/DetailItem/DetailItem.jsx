import InfoPriceItem from '../InfoPriceItem/InfoPriceItem'
import './DetailItem.scss'
import { Helmet } from 'react-helmet-async'

const DetailItem = ({ item }) => {
    return (
      <>
        {item &&
          <>
            <Helmet>
              <title>{item.title}</title>
              <meta name='description' content={item.title} />
            </Helmet>
            <div className='wraper-scroll'>
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
            </div>
          </>}
      </>
    )
}

export default DetailItem
