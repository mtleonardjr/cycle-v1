import './App.css';
import Tile from './components/Tile'
import { useState } from 'react'

function App() {
  // const initialArray = [
  //   {"number":1},
  //   {"number":1},
  //   {"number":1},
  //   {"number":1}
  // ]
  const [tileData, setTileData] = useState([{key:1,num:1},{key:2,num:2},{key:3,num:3},{key:4,num:4}]) 

  const changeNumber = () => {

    const temp = [...tileData];

    temp.forEach((e)=>{
      e.num ++;
    })
    //temp[0] = {...temp, num:5};
    setTileData(temp);
    console.log(tileData);
  }
  return (
    <div className="app-container">
      <div className='grid-container'>
        <Tile data={tileData[0]}/>

        <div className='grid-item' id='grid-item-two'>2</div>
        <div className='grid-item' id='grid-item-three'>3</div>
        <div className='grid-item' id='grid-item-four'>4</div>
      </div>
      <button className='cycle-button' onClick={changeNumber}>Cycle</button>
    </div>
  );
}

export default App;
