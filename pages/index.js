import styles from '../styles/Home.module.css'
import MenuBuscar from '../components/MenuBuscar.js'
import Navbar from '../components/Navbar.js'
import Mapa from '../components/Mapa.js'
import { Wrapper } from '@googlemaps/react-wrapper'

export default function Home() {
    return (
        <div className='bg-secondary vh-100 vw-100'>
            <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} libraries={['marker']} >
                <Mapa />
            </Wrapper>

            <div className='w-100' id={styles.menus}>
                <div className='container'>
                    <MenuBuscar />
                    <Navbar />
                </div>
            </div>
        </div>
    )
}
