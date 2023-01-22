import React from 'react';
import exit from "../assets/exit.png"
import useGlobal from '../contexts/GlobalContext';

const EditSearch = () => {
  const {setModal} = useGlobal()

  return (
    <div className="mb-2 flex items-center justify-between py-1 md:hidden font-muli px-4 sm:pl-8">
      <p className="text-sm font-bold">Edit your search</p>
      <button onClick={()=>setModal(false)}><img src={exit} alt="" className='w-6'/></button>
    </div>
  );
}

export default EditSearch