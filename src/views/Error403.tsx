import React from 'react'


const Error403 = () => {
  return (

      <div className=" flex h-screen items-center justify-center">
        <img className='' src='imgs/error403.jpg' alt='Not Found' />
        <div>
          <h1 className="font-bold " >403- Uh-oh, you do not have access.</h1>
          <p className=" font-bold mb-3">Your account is not authorized to yview this page.</p>
          <a href="/home" className='underline text-blue-600'> Go to Home </a>
        </div>
      </div>
  )
}

export default Error403
