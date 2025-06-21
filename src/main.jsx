import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import Error from "./Error.jsx"

const root = document.getElementById("root")
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        pos => {
            const { latitude, longitude } = pos.coords
            createRoot(root).render(
                <App latitude={latitude} longitude={longitude} />
            )
        },
        () => {
            createRoot(root).render(<Error message={"Allow location access"} />)
        }
    )
} else {
    createRoot(root).render(<Error message={"Geolocation not supported"} />)
}
