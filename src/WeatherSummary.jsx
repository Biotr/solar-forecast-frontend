import { useFetchApi } from "./useFetchApi"
import Error from "./Error"
import { ClipLoader } from "react-spinners"

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
        `https://solar-forecast-backend-91fr.onrender.com/summary?latitude=${position.lat}&longitude=${position.lng}`
    )
    return (
        <>
            {error && <Error message={error} />}
            {!loading && !error && (
                <div className="w-full text-sky-500 bg-white mb-1 rounded-4xl shadow-xl py-3 px-5">
                    <div className="flex w-full border-b items-center justify-between">
                        <div>7-days Summary - {data["weather_status"]}</div>

                        <ClipLoader
                            color={"#00a6f4"}
                            loading={loading}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
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
