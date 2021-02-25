import './App.css';
import Tile from './components/Tile'
import { useState } from 'react'
const Controller = require('./library/Controller')

function App() {
  // const initialArray = [
  //   {"number":1},
  //   {"number":1},
  //   {"number":1},
  //   {"number":1}
  // ]
  const [tileData, setTileData] = useState([{key:1,num:1},{key:2,num:2},{key:3,num:3},{key:4,num:4}]) 

  const cycle = () => {
    // create a temporary copy of the State array 
    const temp = [...tileData];

    //Call our controller class to execute cycle functions
    const controllerRes = Controller.cycle(temp);

    // Set the state to the value of the temporary array
    setTileData(controllerRes);
  }
  return (
    // <div className="app-container">
      // <div className='grid-container'>
      //   <Tile data={tileData[0]}/>
      //   <Tile data={tileData[1]}/>
      //   <Tile data={tileData[2]}/>
      //   <Tile data={tileData[3]}/>

      // </div>
    //   <button className='cycle-button' onClick={cycle}>Cycle</button>
    // </div>

    <div className="app-container">
      <div className='ui-container'>
        <div className='grid-container'>
          <Tile data={tileData[0]}/>
          <Tile data={tileData[1]}/>
          <Tile data={tileData[2]}/>
          <Tile data={tileData[3]}/>
          <Tile data={tileData[4]}/>
          <Tile data={tileData[5]}/>
          <Tile data={tileData[6]}/>
          <Tile data={tileData[7]}/>
          <Tile data={tileData[8]}/>
        </div>
        <div className='info-panel'>
          <div className='info-item'>1</div>
        </div>
      </div>
      <button className='cycle-button' onClick={cycle}>Cycle</button>
    </div>
  );
}

export default App;
