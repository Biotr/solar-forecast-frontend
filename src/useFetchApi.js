import { useState, useEffect } from "react"
export const useFetchApi = url => {
    const [data, setData] = useState({})
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)

                if (response.status != 200) {
                    throw Error(`HTTP Error, status:${response.status}`)
                }

                const responseData = await response.json()

                setData(responseData)
            } catch (err) {
                console.error(err.message)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, loading, error }
}
