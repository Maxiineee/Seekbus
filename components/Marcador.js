import { useEffect, useRef } from 'react'

export default function Marcador({ map, position, title, icon, bus, linha }) {
    const markerRef = useRef()
    const localizacao = useRef()

    async function runFetch() {
        try {
            var data = await fetch('https://seekbusapi.azurewebsites.net/getlocalizacao/' + linha).then((data) => data.json())
            localizacao.current = JSON.parse(data.coords)
            markerRef.current.position = localizacao.current
        }
        catch { }
    }

    useEffect(() => {
        const busIcon = document.createElement("img")
        busIcon.src = `/imgs/maps/${icon}.png`
        busIcon.style.width = "40px"

        if (!map || markerRef.current) return
        markerRef.current = new google.maps.marker.AdvancedMarkerElement({
            map,
            position: bus ? null : position,
            content: busIcon,
            title
        })
    }, [])

    useEffect(() => {
        if (bus == true) {
            if (!markerRef.current) return
            if (!localizacao.current) {
                runFetch()
            }
            const interval = setInterval(() => {
                runFetch()
            }, 5000)
            return () => clearInterval(interval)
        }
    }, [markerRef.current])
}