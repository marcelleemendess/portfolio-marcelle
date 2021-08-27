import styles from '../styles/Home.module.css'
import Link  from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <span className={styles.span}>Let's bring your</span>
        <br />
        <span className={styles.span}>ideas to life!</span>
      </h1>
      <div className={styles.info}>
        <p>My name is Marcelle Mendes and I'm a passionate software developer using web
          technologies to build products and focusing on solving problems with the power of technology.
        </p>
        <img src="img/marcelle.jpg" alt=""/>
      </div>
      <div className={styles.buttons}>
        <Link href="/about">
          <a className={styles.btn}>About me</a>
        </Link>
        <Link href="/projects">
          <a className={styles.btn}>My Projects</a>
        </Link >
      </div>
    </div>
  )
}

export default Home;