

import styles from'./App.module.css';

import Container from '../components/Container/Container'
import Soil from '../components/Soil/Soil';


function App() {
  const moles = [1,2,3,4,5,6];
  
  return (
    <>
      <h1 className={styles.title}>Hit the Mole</h1>
      <Container>
        { moles.map((el) => (
            <Soil key={el} />
        ))}
      </Container>
    </>
  );
}

export default App;
