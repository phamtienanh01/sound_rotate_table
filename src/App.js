// import logo from './logo.svg';
import './App.css';
import { Angle } from "./components/angle/Angle";
import { Sound } from "./components/sound/Sound";
import { TableBootstrap } from "./components/table/TableBootstrap";
import { Time } from "./components/time/Time";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {


  return (
    <div className="body">
      <h1 className="title py-4">Tên đề tài</h1>
      <div className="context">
        <div className='display'>
          <Time />
          <Angle />
          <Sound />
        </div>
      </div>
      <div className='historyTable'>
        <TableBootstrap />
      </div>

    </div>
  );
}

export default App;
