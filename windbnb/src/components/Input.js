import React from 'react'

const Input = ({className,type,}) => {
  return (
    <div className='relative flex-1 font-muli'>
      <span className='absolute left-6 top-2 uppercase text-[9px] font-bold text-w-black'>{type ==="guests" ?"guests": 'location'}</span>
      <input type="text"  placeholder={`Add ${type ==="guests" ?"guests": 'location'}`} className={`${className} placeholder:font-normal pt-6  text-w-black text-sm p-4 px-6 rounded-2xl lg:w-full focus:border focus:border-w-gray focus:outline-none`}/>
    </div>
  )
}

export default Input