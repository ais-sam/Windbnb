import React from 'react'

const Card = ({stay}) => {
  const {city,country,superHost,title,rating,maxGuests,type,beds,photo} = stay
  return (
    <div>
      <div className='rounded-3xl overflow-hidden h-64 sm:h-60'>
        <img src={photo} className="object-cover"/>
      </div>

      <div className='mt-3'>
        <div>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex items-center justify-between gap-2'>
              {superHost ?
              <span className='uppercase text-xs text-w-gray font-bold border border-w-gray p-1 px-[6px] rounded-xl '>super host</span>
               : null}
              <div className='text-w-gray-2 font-normal text-sm p-1'>
                <span >{type}</span>
                <span>{beds && `. ${beds} beds`}</span>
              </div>
            </div>

            <div>
            <i class="fas fa-star text-w-pink"></i>
            <span className='text-sm'>{rating}</span>
            </div>
          </div>
          <div></div>
        </div>

        <p className='text-md font-semibold '>{title}</p>
      </div>
    </div>
  )
}

export default Card