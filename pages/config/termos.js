import styles from '../../styles/Termos.module.css'
import Link from 'next/link'

export default function Termos() {
    return (
        <div id={styles.main} className='vh-100 vw-100 d-flex flex-column'>
            <div className='d-flex align-items-center' id={styles.divTitle}>
                <Link href={{ pathname: '/configuracoes' }}>
                    <img src='/imgs/voltarIcon.svg' alt='' id={styles.iconVoltar} />
                </Link>
            </div>
            <div className='d-flex flex-column align-items-center' id={styles.logoDiv}>
                <img src='/imgs/logo.png' alt='' id={styles.logo} />
            </div>
            <div className='d-flex flex-column align-items-middle mt-auto' id={styles.contentDiv}>
                <h1 className='text-center'>Termos e Condições</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. </p>
            </div>

        </div>
    )
}