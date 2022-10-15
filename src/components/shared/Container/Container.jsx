import './Container.scss'
import clsx from 'clsx'

const Container = ({ children, className = null }) => {
  return (
    <div className={clsx('container', {
      [className]: className
    })}
    >
      {children}
    </div>
  )
}

export default Container
