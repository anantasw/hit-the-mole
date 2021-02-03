import styles from './Mole.module.css';

const Mole = ({shownMole}) => {
    const styled = shownMole ? {top: '5px'} : {top: '100px'}
    return (
        <div 
            className={styles.mole}
            style={styled}
        ></div>
    );
}

export default Mole;