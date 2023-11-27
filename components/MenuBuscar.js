import { useEffect } from 'react'
import styles from '../styles/MenuBuscar.module.css'
import Link from 'next/link'

export default function MenuBuscar({ saida, chegada, nome }) {
    useEffect(() => {
        console.log(nome)
    }, [nome])

    return (
        <div className='container-fluid bg-white mb-3' id={styles.container}>
            <div className='d-flex align-items-center'>
                <img src='/imgs/busIcon1.svg' alt='' id={styles.iconBus} />
                <h1 id={styles.title}>{(nome) ? (nome) : ('Buscar rota')}</h1>
            </div>

            <div className='px-1'>
                <hr className='mx-0 mt-2 mb-4' id={styles.divisor} />
            </div>

            <div className='d-flex'>
                <img src='/imgs/linhaRota.svg' alt='' id={styles.iconRota} />
                <div className='d-flex justify-content-between flex-column w-100'>
                    {(saida || chegada) ? (
                        <>
                            <p className={'form-control text-truncate ' + styles.inputs}>{saida}</p>
                            <p className={'form-control text-truncate ' + styles.inputs}>{chegada}</p>
                        </>
                    ) : (
                        <>
                            <Link href={{ pathname: '/rotas' }}>
                                <input className={'form-control ' + styles.inputs} type='text' placeholder='Localização de Partida' aria-label='Localização de Partida' />
                            </Link>
                            <Link href={{ pathname: '/rotas' }}>
                                <input className={'form-control ' + styles.inputs} type='text' placeholder='Localização de Chegada' aria-label='Localização de Chegada' />
                            </Link>
                        </>
                    )}

                </div>
            </div >
        </div >
    )
}