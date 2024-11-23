import React from 'react'



const Button = ({text}) => {
  return (
    <div>
      <button className='p-2 m-2 bg-gray-100 px-5 py-2 rounded-lg '>{text}</button>
    </div>
  )
}

export default Button