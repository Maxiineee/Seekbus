import styles from '../../styles/Contato.module.css'
import Link from 'next/link'

export default function Contato() {
    return (
        <div id={styles.main} className='vh-100 vw-100 d-flex flex-column'>
            <div className='d-flex align-items-center' id={styles.divTitle}>
                <Link href={{ pathname: '/configuracoes' }}>
                    <img src='/imgs/voltarIcon.svg' alt='' id={styles.iconVoltar} />
                </Link>
                <h1 id={styles.title}>Contato</h1>
            </div>
            <div className={styles.contentDiv}>
                <h1 className='mb-0'>Nome Empresa</h1>
                <h3>(empresa que provê o transporte público)</h3>
                <h2>Telefone:<br />+55 (51) 12345-6789</h2>
                <h2>E-mail:<br />empresa@onibus.com</h2>
                <h2>Endereço:<br />Av Presidente Kennedy, 315, Sapiranga, RS</h2>
                <h2 className='mb-0'>Horário de atendimento:<br />07:00 - 18:00</h2>
            </div>
            <hr className='m-0' id={styles.divisor} />
            <div className={styles.contentDiv}>
                <h1>Desenvolvedoras</h1>
                <h2>Telefone:<br />+55 (51) 99778-4691</h2>
                <h2>E-mail<br />robekmax123@gmail.com<br />tinflih@gmail.com</h2>
            </div>
        </div>
    )
}