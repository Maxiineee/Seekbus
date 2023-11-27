import styles from '../styles/Loading.module.css'

export default function Loading() {
    return (
        <div className='vh-100 w-100 d-flex justify-content-center align-items-center' id={styles.main} >
            <img src='/imgs/loadingGif.gif' alt='' id={styles.loading} />
        </div>
    )
}