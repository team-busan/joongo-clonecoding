import React from 'react'

export default function DetailInfo({productInfo, userInfo, salesInfo}) {
  return (
    <div className='flex w-screen my-5'>
        <div className=' w-3/5 mx-8'>
            <h2 className='my-3'>상품정보</h2>
            <div className='py-5 border-t-2'>
                <h4>{productInfo.content}</h4>
            </div>
        </div>
        <div className='w-2/5 mx-8'>
            <h2 className='my-3'>판매자 정보</h2>
            <div className='py-5 border-2 p-3 '>
                <div className='flex justify-between'>
                    <h4 className='my-5'>{userInfo.user_nickname}</h4>
                    <img src={userInfo.user_profile} alt='salesInfo' className='mx-3 rounded-full h-20  '></img>
                </div>
                <div className='flex text-center w-full  my-5 border-2 '>
                    <div className=' w-1/2 border-r-2 p-6'>
                        <h4>판매횟수</h4>
                      
                    </div>
                    <div className='w-1/2 p-6'>
                        <h4>판매중인 상품</h4>
                        <h5>{salesInfo.length}</h5>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    {salesInfo.map((v,i)=>{
                        if(i<3){
                            return <div className='w-1/3 m-5'key={i} >
                                <img src={v.main_upload_url} key={i} alt='saleProduct' className='h-32'/>
                                <h5>{v.title}</h5>
                                <h6>{v.price}원</h6>
                            </div>
                        }
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
