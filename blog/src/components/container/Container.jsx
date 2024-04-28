import React from 'react'

function Container({children}) {
  return (
    <div className=' px-4 w-full mx-auto'>
        {children}
    </div>
  )
}

export default Container