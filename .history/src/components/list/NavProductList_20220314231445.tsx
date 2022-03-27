import React from 'react'
import ReactPaginate from 'react-paginate'

function NavProductList() {
  return (
    <div className='bg-[#323259]  h-[74px] p-[20px] border-t border-black'>
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={20}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}

        />
    </div>
  )
}

export default NavProductList
