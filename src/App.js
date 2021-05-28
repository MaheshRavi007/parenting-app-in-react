import './App.css';
import { ActivitySummary } from './components/ActivitySummary/ActivitySummary.component';
import {Navbar} from './components/Navbar/Navbar.component'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ActivitySummary/>
    </div>
  );
}

export default App;
