import styles from './Navbar.module.css'
import Logo from '../../asssets/coelho.jpg'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <div className="">
                <div className={styles.nav}>
                    <img className={styles.logo} src={Logo} alt=""/>
                    <Link to='/'><button className={styles.btn}>Home</button></Link>
                    <Link to='portifolio'><button className={styles.btn}>Portifolio</button></Link>
                    <Link to='services'><button className={styles.btn}>Services</button></Link>
                    <Link to='about'><button className={styles.btn}>About Us</button></Link>
                    <Link to='contact'><button className={styles.btn}>Contact</button></Link>
                    
                    
                </div>
            </div>


            
        </nav>
    )
}

