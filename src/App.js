import './App.css';
import Tile from './components/Tile'
import Info from './components/Info'
import { useState } from 'react'
const Controller = require('./library/Controller')

function App() {

  const initialArray = [
    {"surface":{"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}},
    {"surface":{"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}},
    {"surface":{"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}},
    {"surface":{"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}},
    {"surface":{"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}},
    {"surface":{"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}},
    {"surface":{"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}},
    {"surface":{"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}},
    {"surface":{"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}}
  ]

  const [tileData, setTileData] = useState(initialArray) 

  const cycle = () => {
    // create a temporary copy of the State array 
    const temp = [...tileData];

    //Call our controller class to execute cycle functions
    const controllerRes = Controller.cycle(temp);

    // Set the state to the value of the temporary array
    setTileData(controllerRes);
  }
  
  return (
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

        <Info data={tileData[0]}/>

      </div>
      <button className='cycle-button' onClick={cycle}>Cycle</button>
    </div>
  );
}

export default App;
