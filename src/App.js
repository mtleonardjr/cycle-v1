import './App.css';
import Tile from './components/Tile'
import Info from './components/Info'
import { useState } from 'react'
const Controller = require('./library/controller')
const Utilities = require('./library/utilities')

function App() {

  const initialArray = Utilities.createInitalArray(225)

  const [tileData, setTileData] = useState(initialArray) 
  const [infoData, setInfoData] = useState({"surface":{"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}}) 

  //Main Method
  const cycle = () => {
    const temp = [...tileData];
    const controllerRes = Controller.cycle(temp);
    setTileData(controllerRes);
  }

  //Reset Method
  const reset = () => {
    const controllerRes = Controller.buildWorld();
    setTileData(controllerRes);
  }

  // get tile data from hovered tile
  const getHoverData = (data) => {
    console.log(data.position);
    setInfoData(data);
  }

  //console.log(Utilities.createInitalArray(9));

  return (
    <div className="app-container">
      <div className='header'> Header</div>
      <div className='ui-container'>
        <div className='grid-container'>
          {tileData.map((item, index)=>{
            return <Tile data={tileData[index]} getHoverData={getHoverData} key={index}/> 
          })}
        </div>
        <Info data={infoData} cycleFunc={cycle} resetFunc={reset}/>
      </div>
      <div className='header'>Footer</div>
    </div>
  );
}

export default App;
