import React, { Children } from 'react'

const DisplayNumber = ({children}) => {
  return (
    <h2 className='display'>{children}</h2>
  )
}

export default DisplayNumber