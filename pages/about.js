import styles from '../styles/About.module.css';
import Link  from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <p className={styles.text}>
        I'm looking for a team that allows me to perpetually get outside my
        comfort zone. I've spent most of my time learning React.js and the
        new features, but I'm always excited to learn new technologies.
        I will love to hear from you. Whether it's a project, job opportunity,
        or just a chat. Feel free to contact me.
      </p>
      <h1>Skills</h1>
        <ul className={styles.skills}>
        <li className={styles.skill}>Html</li>
        <li className={styles.skill}>Css</li>
        <li className={styles.skill}>Javascript</li>
        <li className={styles.skill}>React</li>
        <li className={styles.skill}>React Hooks</li>
        <li className={styles.skill}>Redux</li>
        <li className={styles.skill}>Node</li>
        <li className={styles.skill}>Express</li>
        <li className={styles.skill}>Firebase</li>
        <li className={styles.skill}>Mongo DB</li>
        <li className={styles.skill}>Rest API</li>
        </ul>
      <div>
        <h1>Contact</h1>
        <Link href="mailto:marcellee.mendess@gmail.com">
          <a className={styles.btn}>
            <FontAwesomeIcon icon="envelope" className={styles.icon}/>
            E-mail
          </a>
        </Link>
        <Link href="https://github.com/marcelleemendess">
          <a target="_blank" className={styles.btn}>
            <FontAwesomeIcon icon={["fab", "github"]} className={styles.icon}/>
            Github
          </a>
        </Link>
      </div>
    </div>
  )
}

export default About;