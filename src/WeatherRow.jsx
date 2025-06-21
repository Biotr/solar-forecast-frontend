import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCloud,
    faSun,
    faCloudSun,
    faSmog,
    faCloudSunRain,
    faCloudShowersHeavy,
    faSnowflake,
    faThunderstorm,
} from "@fortawesome/free-solid-svg-icons"

const getIcon = code => {
    if (code === 0) return faSun
    if ([1, 2].includes(code)) return faCloudSun
    if (code === 3) return faCloud
    if ([45, 48].includes(code)) return faSmog
    if ([51, 53, 55, 56, 57].includes(code)) return faCloudSunRain
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code))
        return faCloudShowersHeavy
    if ([71, 73, 75, 77, 85, 86].includes(code)) return faSnowflake
    if ([95, 96, 99].includes(code)) return faThunderstorm
}

function WeatherRow({ date, weatherCode, maxTemp, minTemp, energy }) {
    const formatData = date.split("-").reverse().join("/")
    const icon = getIcon(weatherCode)
    return (
        <tr>
            <td className="text-center">
                <FontAwesomeIcon icon={icon} />
            </td>
            <td>{formatData}</td>
            <td>
                {Math.floor(maxTemp)}
                <span className="text-sky-300">°C</span>
            </td>
            <td>
                {Math.floor(minTemp)}
                <span className="text-sky-300">°C</span>
            </td>
            <td>
                {energy.toFixed(1)} <span className="text-sky-300">kWh</span>
            </td>
        </tr>
    )
}
export default WeatherRow
