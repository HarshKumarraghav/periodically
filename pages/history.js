import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
const history = () => {
  return (
 <>
   <Head>
        <title>Periodically-History</title>
        <link rel="icon" href="/periodically_favicon.png" />
      </Head>
 <Header/>
    <div className='w-screen h-screen flex justify-center items-center bg-primary text-6xl text-primary-color'>Coming soon.....</div>
 </>
  )
}

export default history