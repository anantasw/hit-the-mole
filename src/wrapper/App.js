import styles from'./App.module.css';

import Container from '../components/Container/Container'
import Soil from '../components/Soil/Soil';
import Mole from '../components/Mole/Mole';

function App() {
  return (
    <>
      <h1 className={styles.title}>Hit the Mole</h1>
      <Container>
        <Soil>
          <Mole />
        </Soil>
        <Soil>
          <Mole />
        </Soil>
        <Soil>
          <Mole />
        </Soil>
      </Container>
    </>
  );
}

export default App;
