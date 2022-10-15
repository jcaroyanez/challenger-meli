import './InfoPriceItem.scss'

const InfoPriceItem = ({ title, price, condition, soldQuantity }) => {
    return (
      <div className='info-item'>
        <span className='info-item__subtitle'>{condition}  -  {soldQuantity} vendidos </span>
        <h1 className='info-item__title'>{title}</h1>
        <div className='info-item__price-wrap'>
          <span className='info-item__price-symbol'>$</span>
          <span>{price.amount}</span>
        </div>
      </div>
    )
}

export default InfoPriceItem
