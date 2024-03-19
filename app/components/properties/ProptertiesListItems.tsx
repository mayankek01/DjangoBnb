import Image from 'next/image'
import React from 'react'
import ReservationSideBar from './ReservationSideBar';
const ProptertiesListItems = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          src="/image.png"
          alt="Eat a burger"
          fill
          sizes="(max-width:768px) 768px,(max-width:1200px):768px,768px)"
          className="hover:scale-110 object-cover tranisiton h-full w-full"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">property Name</p>
      </div>
      <div className="mt-2">
        <p className='text-sm text-gray-500'><strong>$200</strong> Per night</p>
      </div>
    </div> 
  );
}

export default ProptertiesListItems