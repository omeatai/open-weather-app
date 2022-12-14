import React from 'react'
import spinner from '../public/spinner2.svg'
import Image from 'next/image'

const Spinner = () => {
  return (
    <>
        <Image className='relative z-10 w-[200px] m-auto block' src={spinner} alt='Loading...' />
    </>
  )
}

export default Spinner