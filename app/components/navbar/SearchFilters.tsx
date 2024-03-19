import React from 'react'

const SearchFilters = () => {
  return (
    <>
      <div className="h-[48px] lg:h-[64px]  flex flex-row items-center justify-between border rounded-full">
        <div className='hidden lg:block'>
          <div className="cursor-pointer flex flex-row item-center justify-between">
            <div className="w-[250px] h-[64px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Where</p>
              <p className="text-sm">Wanted location</p>
            </div>
            <div className="cursor-pointer h-[48px] lg:h-[64px]  px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Check in</p>
              <p className="text-sm">Add dates</p>
            </div>
            <div className="cursor-pointer h-[48px] lg:h-[64px]  px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Check out </p>
              <p className="text-sm">Add dates</p>
            </div>
            <div className="cursor-pointer h-[48px] lg:h-[64px]  px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
              <p className="text-xs font-semibold">Who </p>
              <p className="text-sm">Add guests</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <div className="p-2 lg:p-4 cursor-pointer  bg-airbnb hover:bg-airbnb-dark tranistion rounded-full text-white">
            <svg
              className="w-4 h-4 cursor-pointer text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchFilters