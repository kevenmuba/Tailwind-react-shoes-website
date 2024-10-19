import React from 'react'
import { Card } from './Card'
// import ShoeDetail from "./ShoeDetail";
// import { Card } from './Card';
// import { SHOE_LIST } from './Constants';

function NewArrivalSection({items}) {
  // bg-[url('../assets/lines.png')]
  return (
    <div className=' mt-20'>
      <div className='flex-center'>
      <div className="bg-lines text-4xl font-extrabold ">New Arriavals</div>

      </div>
       
        <div className='mt-10 grid grid-cols-1 gap-y-24 md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 lg:gap-x-4'>
          {items.map((item) => (
            <Card key={item.id} item={item}/>
          ))}
        </div>


      
    </div>
  )
}

export default NewArrivalSection

