import './App.css';
import Tile from './components/Tile'
import Info from './components/Info'
import { useState, useEffect } from 'react'
const Controller = require('./library/controller')
const Utilities = require('./library/utilities')

function App() {

  const initialArray = Utilities.createInitalArray(15)

  const [tileData, setTileData] = useState(initialArray) 
  const [infoData, setInfoData] = useState({position:{xPos:0,yPos:0},"surface":{tectonicPlate: 1,"surfaceType":"land","fertility":0.5},"atmosphere":{"oxygen":0.5,"nitrogen":0.5},"uGround":{"waterSat":0.75}}) 
  const [gameData, setGameData] = useState({cycle: 0, worldName: "Test World", selected: [99], cycleToggle: false})

  //Cycle Method
  const cycle = () => {
    const temp = [...tileData];
    const controllerRes = Controller.cycle(temp);
    setTileData(controllerRes);
    upCycle();
  }

  //Reset Method
  const reset = () => {
    const controllerRes = Controller.reset(15);
    setTileData(controllerRes);
  }

  //Build World Method
  const build = () => {
    const controllerRes = Controller.buildWorld(15);
    setTileData(controllerRes);
  }

  //Toggle Cycle
  const toggleCycle = () => {
    setGameData({...gameData, cycleToggle: !gameData.cycleToggle})
  }

  //get tile data from clicked tile
  const getClickData = (data) => {
    setInfoData(data);
    setGameData({...gameData, selected: [data.tileId]})
  }

  //increase cycle count
  const upCycle = () => {
    setGameData({...gameData, cycle: gameData.cycle+1})
  }

  //reset cycle count
  const resetCycle = () => {
    setGameData({...gameData, cycle: 0})
  }

  useEffect(() => {
    console.log("use effect called");
    
    let interval = null;
    if (gameData.cycleToggle) {
      interval = setInterval(()=>{ 
        cycle();
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [gameData])

  return (
    <div className="app-container">
      <div className='header'> Header</div>
      <div className='ui-container'>
        <div className='grid-container'>
          {tileData.map((item, index)=>{
            return <Tile data={tileData[index]} 
                         getClickData={getClickData} 
                         key={index} 
                         gameData={gameData}/> 
          })}
        </div>
        <Info data={infoData} 
              cycleFunc={cycle} 
              resetFunc={reset} 
              buildFunc={build}
              toggleFunc={toggleCycle} 
              resetCycleFunc={resetCycle} 
              gameData={gameData}/>
      </div>
      <div className='header'>Footer</div>
    </div>
  );
}

export default App;
