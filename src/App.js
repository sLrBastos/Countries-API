import './App.css';
import Main from './pages/Main/Main';
import NavBar from './components/NavBar/NavBar';
import {CountryContextProvider} from "./contexts/CountriesContext"

function App() {
  return (
    <div >
      <NavBar />
      <CountryContextProvider>
        <div>
          < Main />
        </div>
      </CountryContextProvider>
    </div>
  );
}

export default App;
