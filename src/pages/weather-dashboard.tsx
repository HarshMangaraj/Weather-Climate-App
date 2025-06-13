import { Button } from "@/components/ui/button"
import { useGeolocation } from "@/hooks/use-geolocation"
import { RefreshCw } from "lucide-react"


const WeatherDashboard = () => {
  const {coordinates, error:locationError, getLocation, isLoading:locationLoading} = useGeolocation();

  console.log(coordinates)

  const handleRefresh=()=>{
    getLocation()
    if(coordinates){
      //reload weather data
    }
  }

  if(locationLoading){
    
  }

  return (
    <div className="space-y-4">
      {/* favorite cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button variant={'outline'} size={'icon'} onClick={handleRefresh} >
          <RefreshCw className="h-4 w-4"/>
        </Button>

      </div>

      {/* current and early weather */}
    </div>
  )
}

export default WeatherDashboard