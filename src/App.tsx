import React, {useEffect} from 'react';
import './App.css';
import MoveItem from "./pages/components/MoveItem";
import Draggable from "./pages/components/Draggable";
import {dragLifecycle} from "./pages/utils";

const App = () => {

    useEffect(() => {
        setTimeout(() => {
            dragLifecycle.definedChildren(
                <div style={{width: "200px", height: '200px', background: "red"}}>222</div>
            )
        },2000)
    }, [])

  return (
    <div className='container'>
        <Draggable>
            <MoveItem/>
            <MoveItem/>
            <MoveItem/>
            <MoveItem/>
            <span style={{display:"inline-block", width: "100px", height: "100px", background: 'hotpink'}}/>
            <div style={{width: '100px', height:"100px", border: "1px solid black"}}>111</div>
        </Draggable>
    </div>
  );
};

export default App;
