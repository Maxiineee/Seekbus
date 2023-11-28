import styles from '../styles/Linhas.module.css'
import Linha from '../components/Linha.js'
import { useEffect, useState } from 'react'
import Link from 'next/link.js'

export default function Linhas() {
    const [linhas, setLinhas] = useState()

    useEffect(() => {
        runFetch()
    }, [])

    async function runFetch() {
        try {
            var data = await fetch('https://seekbusapi.azurewebsites.net/getlinhas').then((data) => data.json())
            setLinhas(data)
        }
        catch {
            setLinhas('Erro')
        }
    }

    return (
        <div id={styles.main} className='vh-100 vw-100 d-flex flex-column'>
            <div className='d-flex align-items-center' id={styles.divTitle}>
                <Link href={{ pathname: '/' }}><img src='/imgs/voltarIcon.svg' alt='' id={styles.iconVoltar} /></Link>
                <h1 id={styles.title}>Linhas</h1>
            </div>

            <div className='container-fluid bg-white flex-fill' id={styles.divLinhas}>
                {linhas ? (
                    linhas == 'Erro' ? (
                        <h4>Erro de conexão ao banco de dados. Verifique a sua conexão ou entre em contato com as desenvolvedoras.</h4>
                    ) : (
                        linhas.map((linha, index) => (
                            <Linha id={linha.id} codigo={linha.codigo} nome={linha.nome} saida={linha.saidaDesc} chegada={linha.chegadaDesc} horarios={JSON.parse(linha.horarios)} paradas={linha.paradas} key={index} />
                        ))
                    )
                ) : (
                    <img src='/imgs/loadingGif.gif'></img>
                )}
            </div>

        </div>
    )
}