import styles from '../styles/Linha.module.css'
import { useState } from 'react'
import Link from 'next/link'

export default function Linha({ id, codigo, nome, tEstimado, saida, chegada, paradas, horarios }) {
    let key
    if (nome == undefined) {
        nome = ''
    }
    if (paradas == undefined) {
        paradas = []
    }
    if (horarios == undefined) {
        horarios = []
    }
    if (codigo.substring(0, 2) == 'IF') {
        key = codigo.substring(2)
    } else {
        key = codigo.substring(1)
    }
    const [isActive, setIsActive] = useState(false)

    function handleClick() {
        if (isActive == true) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
    }

    return (
        <div id={styles.main} className=''>
            <a className='d-flex align-items-center' href={'#collapseLinha' + key} role='button' data-bs-toggle='collapse' aria-expanded='false' aria-controls={'collapseLinha' + key} onClick={handleClick}>
                <img src='/imgs/busIcon1.svg' alt='' id={styles.busIcon} />
                <h3 id={styles.title} className={isActive && (nome.length + codigo.length) > 15 ? 'fs-6' : 'text-truncate'} >{codigo} - {nome.toUpperCase()}</h3>
            </a>

            <div className='collapse' id={'collapseLinha' + key}>
                <div id={styles.collapseBody1}>
                    <div className='d-flex'>
                        <div className='d-flex flex-column align-items-start' id={styles.divIcons}>
                            <img src='/imgs/linhaRota2.svg' alt='' className={styles.iconLinhaTop} />
                            <img src='/imgs/linhaRota2.svg' alt='' className={styles.iconLinha} />

                            <div className='collapse' id={'collapseParadas' + key}>
                                <div className='d-flex flex-column align-items-start'>
                                    {paradas.map((val, index) => (
                                        <img src='/imgs/linhaRota2.svg' alt='' className={styles.iconLinha} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className={styles.textPlain}>Saída: {saida}</p>

                            <a className={'d-flex align-items-center ' + styles.aCollapse} href={'#collapseParadas' + key} role='button' data-bs-toggle='collapse' aria-expanded='false' aria-controls={'collapseParadas' + key}>
                                <p className={styles.textCollapse}>{paradas.length}+ paradas</p>
                                <img src='/imgs/collapseIcon.svg' alt='' id={styles.iconCollapse} />
                            </a>

                            <div className='collapse' id={'collapseParadas' + key}>
                                {paradas.map((parada, index) => (
                                    <p className={styles.textPlain2} key={index} >{parada}</p>
                                ))}
                            </div>

                            <p className={styles.textPlain}>Chegada: {chegada}</p>
                        </div>
                    </div>
                    <p className={styles.textPlain}>Tempo estimado: {tEstimado}</p>
                    <a className={'d-flex align-items-center ' + styles.aCollapse} href={'#collapseHorarios' + key} role='button' data-bs-toggle='collapse' aria-expanded='false' aria-controls={'collapseHorarios' + key}>
                        <img src='/imgs/clockIcon.svg' alt='' id={styles.iconClock} />
                        <p className={styles.textCollapse}>Horários</p>
                        <img src='/imgs/collapseIcon.svg' alt='' id={styles.iconCollapse} />
                    </a>

                    <div className='collapse' id={'collapseHorarios' + key}>
                        {horarios.map((horario, index) => (
                            <p className={styles.textPlain} key={index}>{horario}</p>
                        ))}
                    </div>

                    <Link href={{ pathname: '/linha/[linhaId]', query: { linhaId: id } }} className='d-flex align-items-center'>
                        <img src='/imgs/mapIcon.svg' alt='' id={styles.iconMap} />
                        <p className={styles.textCollapse}>Ver no mapa</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
