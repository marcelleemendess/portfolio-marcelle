import styles from '../styles/Backdrop.module.css'

const Backdrop = ({ show, click }) => {
    return show && <div className={styles.backdrop} onClick={click}></div>
};

export default Backdrop;