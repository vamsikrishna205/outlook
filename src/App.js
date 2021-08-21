import './App.css';
import PersistentDrawerLeft from './Components/searchnav/side_navbar';
import Classprops from './Components/Body_Component/index';
import PersistentDrawerLeft1 from './Components/searchnav/side_navbar_copy';

function App() {
  return (
    <div className="App1">
      <div className="App2">
        <PersistentDrawerLeft />
      </div>
      <div className="App3">
        <PersistentDrawerLeft1 />
      </div>

      <div><Classprops /></div>
    </div>
  );
}

export default App;
