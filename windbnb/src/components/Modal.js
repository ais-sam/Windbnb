import {useContext} from 'react'
import {createPortal} from 'react-dom'
import FilterDrawer from "./FilterDrawer";
import useGlobal, { GlobalContext } from '../contexts/GlobalContext';


const Modal = ({onClose}) => {
  // const {showFilter} = useGlobal()
  const {setModal} = useContext(GlobalContext)
    const Backdrop = ({children})=>{
        return <div className="w-full h-full top-0 bg-[#4f4f4f66] fixed z-10" onClick={()=>setModal(false)}>{children}</div>
    }
  return (
    <>
      {createPortal(
        <>
            <Backdrop/>
            <FilterDrawer/>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal