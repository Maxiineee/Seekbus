import { useEffect } from 'react'

export default function Polyline({ path, map, color }) {
    var snappedCoordinates = []
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

    useEffect(() => runSnapToRoad(path), [])

    function runSnapToRoad(path) {
        let pathValues = popularWaypoints(path)
        // Funcao para enviar o request para a API
        async function runFetch() {
            let data = await fetch('https://roads.googleapis.com/v1/snapToRoads?' + new URLSearchParams({
                interpolate: true,
                key: apiKey,
                path: pathValues
            })).then((data) => data.json())
            processSnapToRoadResponse(data)
            drawSnappedPolyline()
        }
        runFetch()
    }

    function processSnapToRoadResponse(data) {
        snappedCoordinates = []

        for (let i = 0; i < data.snappedPoints.length; i++) {
            let latlng = new google.maps.LatLng(
                data.snappedPoints[i].location.latitude,
                data.snappedPoints[i].location.longitude
            )
            snappedCoordinates.push(latlng)
        }
    }

    function popularWaypoints(locais) {
        let locais2 = locais.map((item) => {
            return ([item.lat, item.lng])
        })
        return (locais2.join('|'))
    }

    function drawSnappedPolyline() {
        const Polyline = new google.maps.Polyline({
            path: snappedCoordinates,
            strokeColor: color,
            strokeWeight: 4,
            strokeOpacity: 0.7
        })

        Polyline.setMap(map)
    }
}

