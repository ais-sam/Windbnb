import search from "../../assets/search-pink.png"
import useGlobal from '../../contexts/GlobalContext'
import { types } from "../../reducer/types"

const SearchBar = () => {
  const {dispatch,state} = useGlobal()
  const {totalGeusts} = state
  const {OPEN_MODAL,SHOW_CITIES,HIDE_CITIES,SHOW_GUEST_FILTERS,HIDE_GUEST_FILTERS}=types
  const openFilterDrawer = (type)=>{
    // setModal(true)
    dispatch({
      type: OPEN_MODAL
    })
    if (type ==="location") {
      dispatch({type:SHOW_CITIES})
      dispatch({type:HIDE_GUEST_FILTERS})
      // setGuestFilters(false)
      // setCities(true)
    }else if(type === "guests"){
      dispatch({type:SHOW_GUEST_FILTERS})
      dispatch({type:HIDE_CITIES})
      // setCities(false)
      // setGuestFilters(true)
    }else{
      dispatch({type:HIDE_GUEST_FILTERS})
      dispatch({type:HIDE_CITIES})
      // setCities(false)
      // setGuestFilters(false)
    }

  }
  return (
    <div className='self-center shadow-sm px-2 flex items-center rounded-2xl font-muli text-sm'>
      <button className={`py-3 px-2 font-light border-r-[#F2F2F2] border border-l-0 border-y-0 ${!state.choosedLocation && "text-w-gray-3"}`} onClick={()=>openFilterDrawer("location")}>{state.choosedLocation || "Add location"}</button>
      <button className={`py-3 px-2 font-light border-r-[#F2F2F2] border border-l-0 border-y-0  ${!totalGeusts && "text-w-gray-3"}`} onClick={()=>openFilterDrawer("guests")}>{totalGeusts ? `${totalGeusts} guests` : "Add guests"}</button>
      <button className='px-2' onClick={openFilterDrawer}>
        <img src={search} className="w-5" alt=""/>
      </button>
    </div>
  )
}

export default SearchBar