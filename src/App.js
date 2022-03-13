/* Style File */
import styles from './App.module.css';

/* Components */
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <hr className={styles.horizontalLine} />
      <Body />
    </div>
  );
}

export default App;
