import styles from '../styles/Rotas.module.css'
import Rota from '../components/Rota.js'
import { useEffect } from 'react'
import Link from 'next/link.js'

export default function Rotas() {
    useEffect(() => {
        document.getElementById('partida').focus()
    })

    return (
        <div className='bg-white vh-100 vw-100 d-flex flex-column'>
            <div className='bg-white' id={styles.titleContainer}>
                <div className='d-flex align-items-center' id={styles.divTitle}>
                    <Link href={{ pathname: '/configuracoes' }}><img src='/imgs/voltarIcon.svg' alt='' id={styles.iconVoltar} /></Link>
                    <h1 id={styles.title}>Buscar rota</h1>
                </div>

                <div className='d-flex'>
                    <img src='/imgs/linhaRota.svg' alt='' id={styles.iconRota} />
                    <div className='d-flex justify-content-between flex-column w-100'>
                        <input className={'form-control ' + styles.inputs} type='text' placeholder='Localização de Partida' aria-label='Localização de Partida' id='partida' />
                        <input className={'form-control ' + styles.inputs} type='text' placeholder='Localização de Chegada' aria-label='Localização de Chegada' />
                    </div>
                </div>
            </div >

            <hr className='m-0' id={styles.divisor} />
            <div className='container-fluid d-flex flex-column justify-content-between flex-grow-1' id={styles.divRotas}>
                <Rota codigo='AV3' nome='Rota 1'
                    saida='Av Presidente Kennedy, 315, Sapiranga, Rs'
                    chegada='Av Carlos Pedro, 532, Sapiranga, RS'
                    tEstimado='47 min' tSaida='11:15' tChegada='12:02'
                />

                <Rota codigo='R32' nome='Rota 2'
                    saida='Av Tal Tal Tal, 23, Campo Bom, Rs'
                    chegada='Av Fulano de Tal, 312, Sapiranga, RS'
                    tEstimado='15 min' tSaida='06:40' tChegada='06:55'
                />

                <Rota codigo='132' nome='Rota 3'
                    saida='Av Bla Bla Bla, 164, Campo Bom, Rs'
                    chegada='Av Tal Tal Bla Bla Bla, Sapiranga, RS'
                    tEstimado='1 h 43 min' tSaida='20:15' tChegada='21:58'
                />

                <Rota codigo='2040' nome='Rota 4'
                    saida='Av Fulano Deltrano, 127, Campo Bom, Rs'
                    chegada='Av Bla Bla Tal Tal, 64, Sapiranga, RS'
                    tEstimado='3 h 20 min' tSaida='15:30' tChegada='18:50'
                />

                <Rota codigo='1092' nome='Rota 5'
                    saida='Av Fulano Bla Bla, 32, Campo Bom, Rs'
                    chegada='Av Fulano Fulano, 65, Sapiranga, RS'
                    tEstimado='21 min' tSaida='10:00' tChegada='10:21'
                />
            </div>
        </div>
    )
}