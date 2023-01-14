import './App.css';
import Home from "./pages/Home"
import {GlobalProvider} from './contexts/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="relative">
        <Home/>
      </div>
    </GlobalProvider>
  );
}

export default App;
