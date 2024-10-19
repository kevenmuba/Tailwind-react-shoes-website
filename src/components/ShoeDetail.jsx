import React from 'react'
import img1 from '../assets/n1-min.png'
import Select from './Select'
import { QTY, SIZES } from '../Constants'

function ShoeDetail() {
  return (
    <div className='flex-col lg:flex lg:flex-row-reverse  '>
       <div className='flex-1 lg:-mt-32 lg:ml-28 '>
        <div className='h-full  flex-center bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-50% to-[#4dd4c6]'>
        <img className='animate-float' src={img1}/>



        </div>
         
        
       </div>
       <div className =' flex-1 space-y-6'>
        <div className='text-5xl font-black md:text-9xl'>
            Nike Air Max 210
        </div>
        <div className='font-medium md:text-xl'>
            {
               "This shoes is beautiful and Atractive for everybody" 
            }
            
        </div>
        <div className="flex space-x-6">

        <div className='text-3xl font-extrabold md:text-6xl'>
            100 $
        </div>
        <Select title={"QTY"} options={QTY}/>
        <Select title={"size"} options={SIZES}/>
        </div>
        <button className='btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 mr-3'>
            Add To Bag
        </button>
        <a href="" className='text-lg font-bold underline underline-offset-4'>View details</a>
        </div>


      
    </div>
  )
}

export default ShoeDetail
