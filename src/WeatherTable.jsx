import WeatherRow from "./WeatherRow"
import Error from "./Error"
import { useFetchApi } from "./useFetchApi"
import { ClipLoader } from "react-spinners"
function WeatherTable({ position }) {
    const { data, loading, error } = useFetchApi(
        `https://solar-forecast-backend-91fr.onrender.com/dailyforecast?latitude=${position.lat}&longitude=${position.lng}&power=2.5&efficiency=0.2`
    )
    
    return (
        <>
            {error && <Error message={error} />}
            {!error && (
                <div className="w-full text-sky-500 bg-white mb-1 rounded-4xl shadow-xl py-3 px-5">
                    {loading && (
                        <div className="text-center">
                            <ClipLoader color="#00a6f4"/>
                        </div>
                    )}
                    {!loading && (
                        <>
                            <div className="w-full border-b">7-days Forecast</div>
                            <table className="w-full table-auto text-center ">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Date</th>
                                        <th>Max Temperature</th>
                                        <th>Min Temperature</th>
                                        <th>Solar Energy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data["time"].map((e, id) => (
                                        <WeatherRow
                                            key={id}
                                            date={data["time"][id]}
                                            weatherCode={data["weather_code"][id]}
                                            maxTemp={data["min_temperature"][id]}
                                            minTemp={data["max_temperature"][id]}
                                            energy={data["energy"][id]}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default WeatherTable
