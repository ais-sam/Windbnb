import {useContext} from 'react'
import {createPortal} from 'react-dom'
import FilterDrawer from "./FilterDrawer/FilterDrawer";
import useGlobal, { GlobalContext } from '../contexts/GlobalContext';
import { types } from '../reducer/types';

const Modal = ({onClose}) => {
  // const {showFilter} = useGlobal()
  const {CLOSE_MODAL}=types
  const {dispatch} = useContext(GlobalContext)
    const Backdrop = ({children})=>{
        return <div className="w-full h-full top-0 bg-[#4f4f4f66] fixed z-10" onClick={()=>dispatch({type:CLOSE_MODAL})}>{children}</div>
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