import styles from '../../styles/Home.module.css'
import MenuBuscar from '../../components/MenuBuscar.js'
import Navbar from '../../components/Navbar.js'
import Mapa from '../../components/Mapa.js'
import { Wrapper } from '@googlemaps/react-wrapper'
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from 'react'

export default function LinhaId() {
    const router = useRouter()
    const [linha, setLinha] = useState()
    const [id, setId] = useState()

    async function runFetch() {
        var data = await fetch('https://seekbusapi.azurewebsites.net/getlinha/' + id).then((data) => data.json())
        setLinha(data)
    }

    useEffect(() => {
        if (linha) return
        if (!id) return
        runFetch()
    }, [id])

    useEffect(() => {
        if (id) return
        if (!router.query.linhaId) return
        var data = router.query.linhaId
        setId(data)
    }, [])

    return (
        <div className='bg-secondary vh-100 vw-100'>
            <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} libraries={['marker']} >
                {(linha && id) ? (
                    <Mapa path={JSON.parse(linha.rota)} linha={id} />
                ) : (
                    linha ? (
                        <Mapa path={JSON.parse(linha.rota)} />
                    ) : (
                        <Mapa />
                    )
                )}
            </Wrapper>

            <div className='w-100' id={styles.menus}>
                <div className='container'>
                    {linha && (
                        <MenuBuscar nome={`${linha.codigo} - ${linha.nome}`} saida={linha.saidaDesc} chegada={linha.chegadaDesc} />
                    )}
                    <Navbar />
                </div>
            </div>
        </div>
    )
}