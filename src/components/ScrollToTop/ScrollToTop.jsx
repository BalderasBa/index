import React, { useEffect, useState } from 'react'
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
// import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#'>
        {/* <ArrowUpwardIcon  /> */}
        arrow up
      </a>
    </div>
  ) : null
}

export default ScrollToTop
