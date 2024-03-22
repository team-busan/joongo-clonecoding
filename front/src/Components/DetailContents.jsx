import React from 'react';
import { CiHeart } from "react-icons/ci";


export default function DetailContents({productContent}) {
  return (
    <div className='w-3/5 items-center mx-32'>
      <h3>홈 &gt; {productContent.main_category} &gt; {productContent.sub_category} </h3>
      <h2>{productContent.title}</h2>
      <h2 className=''>{productContent.price} 원</h2>
      <h4 className=' text-gray-300'>조회{productContent.view_count}</h4>
      <div className='flex text-center w-full  my-5 border-2 '>
        <div className=' w-1/2 border-r-2 p-6'>
          <h4>제품상태</h4>
          <h4>{productContent.product_status}</h4>
        </div>
        <div className='w-1/2 p-6'>
          <h4>거래방식</h4>
          <h4>{productContent.type?productContent.type==1?"택배":"직거래,":"직거래"}</h4>
          {/* 0:직거래 1:택배 2:직거래, 택배 */}
          {/* 0:판매중 1:판매완료 */}
        </div>
      </div>
      <div className='flex items-center justify-around w-full'>
        <div className='text-gray-500'>
        <CiHeart size="60"/>
        </div>
        <div className='w-3/4 text-center border-gray-300 rounded-3xl border-2 py-5'>
          <div>
            <h3>채팅하기</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
