import React from 'react';
import exit from "../assets/exit.png"

const EditSearch = () => {
  return (
    <div className="mb-2 flex items-center justify-between py-1 md:hidden font-muli px-4 sm:pl-8">
      <p className="text-sm font-bold">Edit your search</p>
      <img src={exit} alt="" className='w-6'/>
    </div>
  );
}

export default EditSearch