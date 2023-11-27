import styles from '../styles/Configuracoes.module.css'
import Configuracao from '../components/Configuracao.js'
import Link from 'next/link.js'

export default function Configuracoes() {
    return (
        <div className='vh-100 vw-100'>
            <div className='d-flex align-items-center' id={styles.divTitle}>
                <Link href={{ pathname: '/' }}><img src='/imgs/voltarIcon.svg' alt='' id={styles.iconVoltar} /></Link>
                <h1 id={styles.title}>Configurações</h1>
            </div>
            <div>
                <Configuracao icon='temaIcon.svg' text='Tema' />
                <hr className='m-0' id={styles.divisor} />
                <Configuracao icon='sinoIcon.svg' text='Notificações' />
                <hr className='m-0' id={styles.divisor} />
                <Configuracao icon='telefoneIcon.svg' text='Contato' path='contato' />
                <hr className='m-0' id={styles.divisor} />
                <Configuracao icon='infoIcon.svg' text='Sobre' path='sobre' />
                <hr className='m-0' id={styles.divisor} />
                <Configuracao icon='livroIcon.svg' text='Termos e Condições' path='termos' />
            </div>
        </div>
    )
}