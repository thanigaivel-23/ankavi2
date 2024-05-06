import { MdNavigateBefore } from "react-icons/md";
import React from 'react'


const ProductP = ({ onClick }) => {
  return (
    <div onClick={onClick} className='flex items-center'>
    <button className="px-1 py-5 text-gray-400 bg-white border border-gray-200 shadow-lg">
      <MdNavigateBefore />
    </button>
  </div>
  )
}

export default ProductP