import logo from './logo.svg';
import './App.css';
import PersistentDrawerLeft from './Components/searchnav/side_navbar';
import Classprops from './Components/Body_Component/index';

function App() {
  return (
    <div className="App1">
      <div className="App2">
        <PersistentDrawerLeft />
      </div>
      <div><Classprops /></div>
    </div>
  );
}

export default App;
