import { projectData } from '../public/data';
import styles from '../styles/Projects.module.css';

const Projects = () => {

  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.cards_container}>
        {projectData.map((data) => (
          <div key={data.id} className={styles.card}>
            <div className={styles.card__image}>
              <a target="_blank" href={data.liveLink}>
                <img className={styles.img}src={`img/${data.img}`} />
                </a>
            </div>
            <div className={styles.card__2}>
              <h2>{data.projectName}</h2>
              <p>{data.description}</p>
            </div>
            <div className={styles.button__div}>
              <a target="_blank" href={data.liveLink}>
                <button className={styles.card__btn}>View Live</button>
              </a>
              <a target="_blank" href={data.codeLink}>
                <button className={styles.card__btn}>View Code</button>
              </a> 
            </div>
          </div>
        ))}   
      </div>
    </div> 
  )
}

export default Projects;