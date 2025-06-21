import { useEffect, useState } from "react"
import LocationInput from "./LocationInput"
import LocationMap from "./LocationMap"
import WeatherSummary from "./WeatherSummary"
import WeatherTable from "./WeatherTable"
function App({ latitude, longitude }) {
    const [position, setPosition] = useState({ lat: latitude, lng: longitude })
    return (
        <>
            <div className="w-full text-sky-500 bg-white p-5 mb-1 rounded-4xl shadow-xl">
                <LocationInput
                    lat={position.lat}
                    lng={position.lng}
                    onSetPosition={setPosition}
                />
                <LocationMap
                    lat={position.lat}
                    lng={position.lng}
                    onSetPosition={setPosition}
                />
            </div>
            <WeatherTable position={position} />
            <WeatherSummary position={position} />
        </>
    )
}

export default App
