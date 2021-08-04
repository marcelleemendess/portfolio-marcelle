import styles from '../styles/Navbar.module.css'
import Link  from 'next/link';


const Navbar = ({ click }) => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                      <a>About Me</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                      <a>Projects</a>
                    </Link>
                </li>
            </ul>

            <div className={styles.hamburger__menu} onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar
