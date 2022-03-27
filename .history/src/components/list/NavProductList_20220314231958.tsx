import React from 'react'
import ReactPaginate from 'react-paginate'

function NavProductList() {
    const handlePageClick = () =>{

    }
  return (
    <div className='bg-[#323259]  h-[74px] p-[20px] border-t border-black'>
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={20}
            // marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'inline-flex -space-x-px'}
            pageClassName={''}
            pageLinkClassName={'py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
        />
    </div>
  )
}

export default NavProductList