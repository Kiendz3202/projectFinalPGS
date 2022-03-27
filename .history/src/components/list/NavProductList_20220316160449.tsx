import React,{MouseEvent} from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
  onPageChange(e:MouseEvent):void;
  pageCount:number
}

function NavProductList(props: Props) {
  const {onPageChange,pageCount} = props
    const handlePageClick = (e:any) =>{
      onPageChange(e)
    }
  return (
    <div className='flex bg-[#323259]  h-[74px] p-[20px] border-t border-black'>
        <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'inline-flex -space-x-px'}
            pageClassName={''}
            pageLinkClassName={'py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
            previousLinkClassName={' py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
            nextLinkClassName={' py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
        />
        <div>selelct</div>
    </div>
  )
}

export default NavProductList
