import React, { useCallback, useRef, ReactElement } from 'react';
import './App.css';
import Plant from './components/plant'
import PickColor from './components/tools/pickColor'
function App() {
 
  const planeRef = useRef();
  const handleColorPicked = useCallback((color)=>{
  
    //@ts-ignore
    planeRef?.current?.changeColor(color);
  },[]);
  return (
    <div className="App">
      <Plant ref={planeRef}/>
      <PickColor handleColorChange={handleColorPicked}/>
    </div>
  );
}

export default App;
