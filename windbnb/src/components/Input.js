import React from 'react'

const Input = ({className,type,onClick,onChange}) => {
  return (
    <div className={`${className} relative font-muli`} onClick={onClick}>
      <span className='absolute left-6 top-2 uppercase text-[9px] font-bold text-w-black'>{type ==="guests" ?"guests": 'location'}</span>
      <input type={type === "guests"? "number" : "text"}  placeholder={`Add ${type ==="guests" ?"guests": 'location'}`} onChange={onChange} className={`${className} placeholder:font-normal placeholder:text-sm pt-6  text-w-black text-sm p-4 px-5 md:px-6 rounded-2xl w-full focus:border focus:border-w-gray focus:outline-none`}/>
    </div>
  )
}

export default Input