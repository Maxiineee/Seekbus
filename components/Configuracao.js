import styles from '../styles/Configuracao.module.css'
import Link from 'next/link'

export default function Configuracao({ icon, text, path }) {
    return (
        <Link href={{ pathname: '/config/' + path }}>
            <div id={styles.main} className='bg-white d-flex align-items-center'>
                <img src={`/imgs/${icon}`} alt='' id={styles.icon} />
                <h2>{text}</h2>
            </div>
        </Link>
    )
}