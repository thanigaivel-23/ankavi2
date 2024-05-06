import React from 'react'
import { MdNavigateNext } from "react-icons/md";



const ProductN = ({ onClick }) => {
  return (
    <div onClick={onClick} className='flex  items-center'>
      <button className="px-1 py-5 text-gray-400 bg-white border border-gray-200 shadow-lg">
        <MdNavigateNext />
      </button>
    </div>
  )
}

export default ProductN