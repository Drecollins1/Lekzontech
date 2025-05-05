import React, { useEffect } from 'react'

const Map = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="fade-up" className='mt-20 text-center'>
        <h1 className='text-xl mb-4'>Our Global Presence</h1>
        <p>when you need us to improve your business, then come with us to help you then come have reach it, you just sit and feel the goal</p>

        <img src="assets/images/map.png" className='w-[70%] m-auto mt-7' alt="map" />
    </div>
  )
}

export default Map