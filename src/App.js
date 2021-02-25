import './App.css';
import Tile from './components/Tile'
import Info from './components/Info'
import { useState } from 'react'
const Controller = require('./library/Controller')

function App() {

  const initialArray = [
    {"surface":{"surfaceType":"land","altitude":64.934320566616,"waterLevel":60},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"organicSoil":50}},
    {"surface":{"surfaceType":"land","altitude":64.934320566616,"waterLevel":60},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"organicSoil":50}},
    {"surface":{"surfaceType":"land","altitude":64.934320566616,"waterLevel":60},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"organicSoil":50}},
    {"surface":{"surfaceType":"land","altitude":64.934320566616,"waterLevel":60},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"organicSoil":50}},
    {"surface":{"surfaceType":"land","altitude":64.934320566616,"waterLevel":60},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"organicSoil":50}},
    {"surface":{"surfaceType":"land","altitude":64.934320566616,"waterLevel":60},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"organicSoil":50}},
    {"surface":{"surfaceType":"land","altitude":64.934320566616,"waterLevel":60},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"organicSoil":50}},
    {"surface":{"surfaceType":"land","altitude":64.934320566616,"waterLevel":60},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"organicSoil":50}},
    {"surface":{"surfaceType":"land","altitude":64.934320566616,"waterLevel":60},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"organicSoil":50}},
  ]

  const [tileData, setTileData] = useState(initialArray) 
  const [infoData, setInfoData] = useState(
    {"surface":{"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}}
  ) 

  const cycle = () => {
    // create a temporary copy of the State array 
    const temp = [...tileData];

    //Call our controller class to execute cycle functions
    const controllerRes = Controller.cycle(temp);

    // Set the state to the value of the temporary array
    setTileData(controllerRes);
  }

  // get tile data from hovered tile
  const getHoverData = (data) => {
    setInfoData(data);
  }

  return (
    <div className="app-container">
      <div className='ui-container'>
        <div className='grid-container'>
          <Tile data={tileData[0]} getHoverData={getHoverData}/>
          <Tile data={tileData[1]} getHoverData={getHoverData}/>
          <Tile data={tileData[2]} getHoverData={getHoverData}/>
          <Tile data={tileData[3]} getHoverData={getHoverData}/>
          <Tile data={tileData[4]} getHoverData={getHoverData}/>
          <Tile data={tileData[5]} getHoverData={getHoverData}/>
          <Tile data={tileData[6]} getHoverData={getHoverData}/>
          <Tile data={tileData[7]} getHoverData={getHoverData}/>
          <Tile data={tileData[8]} getHoverData={getHoverData}/>
        </div>

        <Info data={infoData}/>

      </div>
      <button className='cycle-button' onClick={cycle}>Cycle</button>
    </div>
  );
}

export default App;
