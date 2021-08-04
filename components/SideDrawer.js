import styles from '../styles/SideDrawer.module.css'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SideDrawer = ({ show, click }) => {

    return (
      <div className={show ? styles.sidedrawer__show : styles.sidedrawer}>
        <div className={styles.fontawesome}>
          <FontAwesomeIcon icon="times" onClick={click}/>
        </div>
       
        <ul className={styles.sidedrawer__links} onClick={click}>
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
      </div>
    )
}

export default SideDrawer;
