import styles from './Navbar.module.css'
import Logo from '../../asssets/coelho.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {


    return (
        <>
            <nav className="relative  w-full m-auto flex flex-wrap items-center justify-center items-center py-4 bg-white mb-3 text-gray-500 hover:text-gray-700 focus:text-gray-500 shadow-lg navbar navbar-expand-lg navbar-light">
            <Link to='/' className='m-auto'><img src={Logo}></img></Link>               
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button className=" flex justify-center m-auto navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                            className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path  fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                        
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav flex justify-end items-center m-auto flex-col pl-0 list-style-none mr-auto">
                            <li className="nav-item px-2">
                                <Link to='/'><button className={styles.btn}>Home</button></Link>
                            </li>
                            <li className="nav-item pr-2">
                                <Link to='portifolio'><button className={styles.btn}>Portifolio</button></Link>
                            </li>
                            <li className="nav-item pr-2">
                                <Link to='services'><button className={styles.btn}>Services</button></Link>
                            </li>
                            <li className="nav-item pr-2">
                                <Link to='about'><button className={styles.btn}>About Us</button></Link>
                            </li>
                            <li>
                                <Link to='contact'><button className={styles.btn}>Contact</button></Link>
                            </li>
                        </ul>
                        {/* <!-- Left links --> */}
                    </div>
                    {/* <!-- Collapsible wrapper --> */}
                </div>
            </nav>

        </>












        // <nav className={styles.container}>
        //     <div className="">
        //         <div className={styles.nav}>
        //             <img className={styles.logo} src={Logo} alt=""/>
        //             <Link to='/'><button className={styles.btn}>Home</button></Link>
        //             <Link to='portifolio'><button className={styles.btn}>Portifolio</button></Link>
        //             <Link to='services'><button className={styles.btn}>Services</button></Link>
        //             <Link to='about'><button className={styles.btn}>About Us</button></Link>
        //             <Link to='contact'><button className={styles.btn}>Contact</button></Link>


        //         </div>
        //     </div>



        // </nav>
    )
}

