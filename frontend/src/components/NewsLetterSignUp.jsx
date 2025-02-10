import React from 'react'

const NewsLetterSignUp = () => {
  return (
    <div >
        <form className='flex'>
                <input type="email" className=' focus:outline-none bg-white py-2 w-80' placeholder='Email'></input>
                <button className='py-2 px-4 bg-black text-white font-bold hover:text-black hover:bg-yellow-300 transition  uppercase'>Sign Up</button>
        </form>
    </div>
  )
}

export default NewsLetterSignUp