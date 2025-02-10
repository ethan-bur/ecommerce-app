import React from 'react'
import NewsLetterSignUp from './NewsLetterSignUp'

const NewsLetter = () => {
  return (
    <div className='flex items-center justify-around py-5 bg-black'>
        <div className=''>
            <h1 className='font-medium text-white'>Join the Fable Club</h1>
            <p></p>
        </div>
        
        <NewsLetterSignUp />
        
    </div>
  )
}

export default NewsLetter