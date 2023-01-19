import search from "../assets/search-pink.png"
import useGlobal from '../contexts/GlobalContext'


const SearchBar = () => {
  const {setModal,setCities,setGuestFilters} = useGlobal()
  const openFilterDrawer = (type)=>{
    setModal(true)
    if (type ==="location") {
      setGuestFilters(false)
      setCities(true)
    }else if(type === "guests"){
      setCities(false)
      setGuestFilters(true)
    }else{
      setCities(false)
      setGuestFilters(false)
    }

  }
  return (
    <div className='self-center shadow-sm px-2 flex items-center rounded-2xl font-muli text-sm'>
      <button className='py-3 px-2 font-light border-r-[#F2F2F2] border border-l-0 border-y-0' onClick={()=>openFilterDrawer("location")}>Helsinki, Finland</button>
      <button className='py-3 px-2 font-light border-r-[#F2F2F2] border border-l-0 border-y-0 text-w-gray-3' onClick={()=>openFilterDrawer("guests")}>Add guests</button>
      <button className='px-2' onClick={openFilterDrawer}>
        <img src={search} className="w-5" alt=""/>
      </button>
    </div>
  )
}

export default SearchBar