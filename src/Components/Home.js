import React from 'react'
import img1 from './imgs/network.png'

export default function Home() {
  return (<>
    <div className='text-light container mt-4 ' style={{boxShadow:'2px 8px 15px 2px white'}}>
      <h3 className='text-center'>OUR MISSION IS TO BUILD A EFFICIENT AND EASY PAYMENT SYSTEM</h3>
      <img className='rounded mx-auto d-block' style={{maxWidth: '60%'}} src={img1} alt="" />
    </div>
    <div className='text-light text-center container mt-4 '>
        <h4>CURRENT USERS :</h4>
        <h4>CURRENT PRICE :</h4>
    </div>
    </>
  )
}
