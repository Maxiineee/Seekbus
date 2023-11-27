import styles from '../../styles/Sobre.module.css'
import Link from 'next/link'

export default function Sobre() {
    return (
        <div id={styles.main} className='vh-100 vw-100 d-flex flex-column'>
            <div className='d-flex align-items-center' id={styles.divTitle}>
                <Link href={{ pathname: '/configuracoes' }}>
                    <img src='/imgs/voltarIcon.svg' alt='' id={styles.iconVoltar} />
                </Link>
                <h1 id={styles.title}>Contato</h1>
            </div>
            <div className='d-flex flex-column align-items-center' id={styles.contentDiv}>
                <img src='/imgs/logo.png' alt='' id={styles.logo}/>
                <p className='text-center' id={styles.mainText}>SeekBus é um aplicativo desenvolvido e mantido por uma dupla de estudantes, 
                    Maxine Chloe R. Oziembloski e Lívia Malheiros Garcia. O aplicativo foi 
                    desenvolvido como um Projeto Científico para a matéria de Projetos II no 
                    Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense (IFSul) 
                    Câmpus Sapiranga.</p>
                <p className='text-center' id={styles.secondText}>O projeto não possui nenhuma afiliação com a prefeitura da cidade de Campo Bom ou com a empresa Stadtbus.</p>
            </div>
        </div>
    )
}