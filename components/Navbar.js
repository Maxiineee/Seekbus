import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='container bg-white' id={styles.container}>
            <div className='row g-0'>
                <Link href={{ pathname: '/' }} className='col d-flex flex-column align-items-center'>
                    <img src='/imgs/buscarIcon.svg' alt='Buscar' className={styles.icons} />
                    <p>Buscar</p>
                </Link>
                <Link href={{ pathname: '/linhas' }} className='col d-flex flex-column align-items-center'>
                    <img src='/imgs/linhasIcon.svg' alt='Linhas' className={styles.icons} />
                    <p>Linhas</p>
                </Link>
                <Link href={{ pathname: '/configuracoes' }} className='col d-flex flex-column align-items-center'>
                    <img src='/imgs/configIcon.svg' alt='Configurações' className={styles.icons} />
                    <p>Config.</p>
                </Link>
            </div>
        </div>
    )
}