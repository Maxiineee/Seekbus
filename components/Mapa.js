import styles from '../styles/Mapa.module.css'
import { useEffect, useState, useRef } from 'react'
import Marcador from '../components/Marcador.js'
import Polyline from '../components/Polyline.js'

var center = { lat: -29.68274356385694, lng: -51.06156073196666 }

export default function Mapa({ path, linha }) {
    const [map, setMap] = useState()
    const [userLocal, setUserLocal] = useState()

    const ref = useRef()
    const mapOptions = {
        mapId: process.env.NEXT_PUBLIC_MAP_ID,
        center,
        zoom: 14,
        disableDefaultUI: true
    }

    if (path) {
        let coords = path[path.length - 1]
        center = { lat: coords.lat - 0.0070, lng: coords.lng }
        if (map) {
            map.panTo(center)
        }
    }

    useEffect(() => {
        if (!map) {
            setMap(new window.google.maps.Map(ref.current, mapOptions))
        }
    }, [])

    useEffect(() => {
        if (navigator.geolocation && !userLocal && !path) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                setUserLocal({ lat: coords.latitude, lng: coords.longitude })
            })
        }
        if (map && userLocal) {
            let userLocal2 = { lat: userLocal.lat - 0.0070, lng: userLocal.lng }
            map.panTo(userLocal2)
        }
    }, [map, userLocal])

    return (
        <>
            {/* Div do mapa */}
            <div ref={ref} className='v-100 h-100' />
            {/* Inserindo markers */}
            {map && (
                <>
                    {userLocal && <Marcador map={map} position={userLocal} icon='3' title='Sua localização atual' />}
                    {path &&
                        <>
                            <Marcador map={map} position={path[0]} icon='2' title='Início da rota' />
                            <Marcador map={map} position={path[path.length - 1]} icon='2' title='Fim da rota' />
                            <Polyline map={map} path={path} color='green' />
                            <Marcador map={map} position={center} icon='1' title='Posição do õnibus' bus={true} linha={linha} />
                        </>
                    }
                </>
            )}
        </>
    )
}