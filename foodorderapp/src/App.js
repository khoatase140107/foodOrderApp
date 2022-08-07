import './App.css';
import Header from './components/header/Header';
import Container from './components/container/Container';
import { useState , useContext, createContext} from 'react';

export const themeContext =createContext()
function App() {
 const [theme,setTheme] = useState('light')
 const changeTheme = () => {
  setTheme(theme === 'light'?'dark':'light')
 }
  return (
  <themeContext.Provider value={theme}>
  <div className='change-theme'
  style={{margin:'0px 50%'}}
  >
  <button onClick={changeTheme}>Change theme</button>
  </div>
  <Header />
  <Container />
  </themeContext.Provider>
  );
}

export default App;
