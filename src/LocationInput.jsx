import { useState, useEffect } from "react"

function LocationInput({ lat, lng, onSetPosition }) {
    const [latValue, setLatValue] = useState(lat)
    const [lngValue, setLngValue] = useState(lng)

    useEffect(() => {
        setLatValue(lat)
        setLngValue(lng)
    }, [lat, lng])

    const handleSubmit = e => {
        e.preventDefault()
        if (!latValue || !lngValue) return
        let currentLat = latValue
        let currentLng = lngValue

        if (latValue > 90) currentLat = 90
        else if (latValue < -90) currentLat = -90

        if (lngValue > 180) currentLng = 180
        else if (lngValue < -180) currentLng = -180

        setLatValue(currentLat)
        setLngValue(currentLng)
        onSetPosition({ lat: parseFloat(currentLat), lng: parseFloat(currentLng) })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row  mb-3"
        >
            <div className=" mr-2">
                <label className="">Langitude: </label>
                <input
                    type="number"
                    value={latValue}
                    step="any"
                    className="border border-sky-100 w-50 rounded-full p-2"
                    onChange={e => {
                        setLatValue(e.target.value)
                    }}
                />
            </div>
            <div>
                <label className="">Longitude: </label>
                <input
                    type="number"
                    value={lngValue}
                    step="any"
                    className="border border-sky-100 w-50 rounded-full p-2 mr-2"
                    onChange={e => {
                        setLngValue(e.target.value)
                    }}
                />
            </div>
            <input
                type="submit"
                className="rounded-full bg-sky-500 py-2 w-20 px-4 text-white"
                value="Set"
            />
        </form>
    )
}
export default LocationInput
