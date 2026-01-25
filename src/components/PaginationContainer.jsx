import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'



const PaginationContainer = () => {
  const {metaData} = useLoaderData()
  const navigate = useNavigate()
  const {search,pathname} = useLocation()
  const {page,pageSize,pageCount,total}=metaData.pagination;


  const pages=Array.from({length:pageCount},(_,index)=>index+1);

  console.log('pages : ',pages);

  const handlePageChange=(newPage)=>{
    
    const searchParams=new URLSearchParams(search);
    searchParams.set('page',newPage);
    navigate(`${pathname}?${searchParams.toString()}`)
  }
  
  
  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button 
        className='btn btn-xs sm:btn-md join-item'
        onClick={()=>{
          let prevPage=page-1;

          if(prevPage<1) prevPage=pageCount;

          handlePageChange(prevPage);
        }}
        >
          Prev
        </button>
           {
            pages.map((pageNumber)=>{

              return (
                <button 
                  key={pageNumber}
                  className={`btn btn-xs sm:btn-md border-none join-item 
                     ${pageNumber === page ? 'bg-base-300 border-base-300': ''}`}
                  onClick={()=>{
                    handlePageChange(pageNumber)
                  }} 
                  >
                  {pageNumber}
                </button>
              )
            }
          )
           }
        <button 
        className='btn btn-xs sm:btn-md join-item'
        onClick={()=>{
          let nextPage=page + 1;
          if(nextPage > pageCount )nextPage=1;
          handlePageChange(nextPage);
        }}
        >
          Next
        </button>
      </div>
    </div>
  )      
}

export default PaginationContainer
