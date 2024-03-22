import React from 'react'

export default function Comment({comment}) {
  return (
    <div className='w-full '>
        <h2 className='my-5'>댓글 <span className=' text-gray-300'>({comment.length})</span></h2>
        <div className=' border-t-2 p-3 w-full'>
            {comment.map((v,i)=>{
                return <div className='flex mx-3 my-10' key={i}>
                    <img src={v.user_profile} alt='salesInfo'  className='mx-3 rounded-full h-20'></img>
                    <div className='mx-5 my-2'>
                        <h4>{v.user_nickname}</h4>
                        <h4>{v.comment_content}</h4>
                    </div>
                </div>
            })}
        </div>
    </div>

  )
}
