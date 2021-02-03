import { useState } from 'react';
import styles from './Soil.module.css';

import Mole from '../Mole/Mole';

const Soil = () => {
    const [shownMole, setShownMole] = useState(false);

    const moleClickedHandler = () => {
        setShownMole(!shownMole);
    }

    return (
        <div className={styles.soil} onClick={moleClickedHandler}>
            <Mole shownMole={shownMole} />
        </div>
    );
}

export default Soil;