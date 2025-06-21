import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    useMapEvents,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect } from "react"
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png"

const markerProp = new L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [17, 40],
})

function ClickHandler({ setPosition }) {
    useMapEvents({
        click(e) {
            setPosition({ lat: e.latlng.lat, lng: e.latlng.lng })
        },
    })
    return null
}

function MapUpdater({ position }) {
    const map = useMap()
    useEffect(() => {
        map.setView([position.lat, position.lng])
    }, [position, map])

    return null
}

function LocationMap({ lat, lng, onSetPosition }) {
    return (
        <MapContainer
            style={{ height: "250px", width: "100%", borderRadius: "30px" }}
            center={[lat, lng]}
            zoom={5}
            minZoom={4}
            scrollWheelZoom={true}
            maxBounds={[
                [-90, -180],
                [90, 180],
            ]}
            maxBoundsViscosity={1.0}
        >
            <TileLayer
                noWrap={true}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapUpdater position={{ lat, lng }} />
            <ClickHandler setPosition={onSetPosition} />
            <Marker position={[lat, lng]} icon={markerProp} />
        </MapContainer>
    )
}

export default LocationMap
