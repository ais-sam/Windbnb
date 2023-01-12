import React from 'react'

const Input = ({className,type,}) => {
  return (
    <div className={`${className} relative font-muli`}>
      <span className='absolute left-6 top-2 uppercase text-[9px] font-bold text-w-black'>{type ==="guests" ?"guests": 'location'}</span>
      <input type="text"  placeholder={`Add ${type ==="guests" ?"guests": 'location'}`} className={`${className} placeholder:font-normal placeholder:text-sm pt-6  text-w-black text-sm p-4 px-5 md:px-6 rounded-2xl w-full focus:border focus:border-w-gray focus:outline-none`}/>
    </div>
  )
}

export default Input