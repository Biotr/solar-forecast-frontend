import { useFetchApi } from "./useFetchApi"
import Error from "./Error"

const formatTime = seconds => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)

    let result = ""
    if (h > 0) result += `${h}h `
    if (m > 0 || h === 0) result += `${m}min`
    return result
}

function WeatherSummary({ position }) {
    const { data, loading, error } = useFetchApi(
        `http://localhost:8000/summary?latitude=${position.lat}&longitude=${position.lng}`
    )
    return (
        <>
            {error && <Error message={error} />}
            {!loading && !error && (
                <div className="w-full text-sky-500 bg-white mb-1 rounded-4xl shadow-xl py-3 px-9">
                    <div className="w-full border-b">
                        7-days Summary - {data["weather_status"]}
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap w-full text-center items-center">
                        <div className="flex-1 ">
                            <div className="text-sky-300">Pressure</div>
                            <div>{data["average_pressure"]} hPa</div>
                        </div>
                        <div className="flex-1 ">
                            <div className="text-sky-300">Max Temperature</div>
                            <div>{Math.floor(data["max_temperature"])}°C</div>
                        </div>
                        <div className="flex-1">
                            <div className=" text-sky-300">Min Temperature</div>
                            <div>{Math.floor(data["min_temperature"])}°C</div>
                        </div>
                        <div className="flex-1">
                            <div className="text-sky-300">
                                Average Sunshine Duration
                            </div>
                            <div>
                                {formatTime(data["average_sunshine_duration"])}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default WeatherSummary
