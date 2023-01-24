import { useFilterContext } from '../../contexts/FilterContext'
import useGlobal from '../../contexts/GlobalContext'
import { locations as cities } from '../../utils/locations'
import LocationItem from './LocationItem'


const LocationFilters = ({className}) => {
  const {location,setLocation} = useGlobal()
  // const {location,setLocation} = useFilterContext()

  const filterdCities = location && cities.filter(el=>{
    return el.toLowerCase().includes(location.toLowerCase())
  })
  // const filterdCities = cities

  const selectLocation = (selectedCity)=>{
    setLocation(selectedCity)
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