import UICrightArrow from '../../uiCons/UICrightArrow/UICrightArrow'
import './BreadCrumbs.scss'

const BreadCrumbs = ({ categories }) => {
  const lastIndex = categories.length - 1

  return (
    <nav>
      <ol className='nav-breadcrumbs'>
        {categories.map((category, index) =>
          <li key={index} className='nav-breadcrumbs__item'>
            <span className='nav-breadcrumbs__text'>{category}</span>
            {lastIndex !== index &&
              <div className='nav-breadcrumbs__arrow'>
                <UICrightArrow width={10} height={10} fill='#a9a9a9' />
              </div>}
          </li>)}
      </ol>
    </nav>
  )
}

export default BreadCrumbs
