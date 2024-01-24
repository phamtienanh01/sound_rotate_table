// Import necessary components
import './App.css';
import { Angle } from "./components/angle/Angle";
import { Sound } from "./components/sound/Sound";
import Search from './components/search/Search';
import { TableBootstrap } from "./components/table/TableBootstrap";
import { Time } from "./components/time/Time";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='page'>
      <div className="body">
        <h1 className="title">able sound classification</h1>
        <div className="context">
          <div className='display'>
            <Time />
            <Angle />
            <Sound />
          </div>
        </div>
        <div className='search'>
          <Search />
        </div>
        <div className='historyTable'>
          <TableBootstrap />
        </div>
      </div>
    </div>
  );
}

export default App;
