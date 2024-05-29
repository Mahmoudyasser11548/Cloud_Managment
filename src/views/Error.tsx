import React from 'react'


const Error = () => {
  return (

      <div className="flex h-screen items-center justify-center ">
          <div className=" ms-12">
            <h1 className="font-bold" >404: Not Found</h1>
            <p>We couldn't find that page, please check the URL and try again.mm</p>
            <a href="/home" className='underline text-blue-600'> Go to Home </a>
          </div>
        <img src='imgs/error.jpg' alt='Not Found' />
      </div>
  )
}

export default Error
