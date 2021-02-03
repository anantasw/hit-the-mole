import styles from './Soil.module.css';

const Soil = ({children}) => {
    return (
        <div className={styles.soil}>
            {children}
        </div>
    );
}

export default Soil;