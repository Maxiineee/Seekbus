import styles from '../styles/Rota.module.css'

export default function Rota({ codigo, nome, tEstimado, saida, chegada, tSaida, tChegada, target }) {
    return (
        <div id={styles.main}>
            <a href={target}>
                <div className='row g-0 mb-2'>
                    <div className='col-2 col-md-1'>
                        <h2>{codigo}</h2>
                    </div>
                    <div className='col'>
                        <h1>{nome}</h1>
                    </div>
                    <div className='col-3 col-md-2'>
                        <h4 className='text-end'>{tEstimado}</h4>
                    </div>
                </div>
                <div className='row g-0 mb-1'>
                    <div className='col'>
                        <h5>Saída: {saida}</h5>
                    </div>
                    <div className='col-2 col-md-1'>
                        <h5 className='text-end'>{tSaida}</h5>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col'>
                        <h5>Chegada: {chegada}</h5>
                    </div>
                    <div className='col-2 col-md-1'>
                        <h5 className='text-end'>{tChegada}</h5>
                    </div>
                </div>
            </a>
        </div>
    )
}