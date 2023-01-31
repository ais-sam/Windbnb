
import useGlobal from '../../contexts/GlobalContext'
import { locations as cities } from '../../utils/locations'
import LocationItem from './LocationItem'
import { types } from '../../reducer/types'

const LocationFilters = ({className}) => {
  const {SET_LOCATION} = types
  const {state,dispatch} = useGlobal()
  const {location} = state
  const filterdCities = location && cities.filter(el=>{
    return el.toLowerCase().includes(location.toLowerCase())
  })


  const selectLocation = (selectedCity)=>{
    dispatch({type:SET_LOCATION,payload:selectedCity})
  }
  return (
    <ul className={`${className} font-muli text-w-gray md:pl-4`}>
        {(location ? filterdCities : cities).map((city,index)=>{
          return <LocationItem key={index} onClick={()=>selectLocation(city)} city={city}/>
        })}
    </ul>
  )
  
}

export default LocationFilters