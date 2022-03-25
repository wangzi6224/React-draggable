import React from 'react';
import Dragable from '../Dragable';
import MoveItem from '../MoveItem';

const Canvas = () => {
  return (
      <Dragable>
        <MoveItem/>
        <MoveItem/>
        <MoveItem/>
        <MoveItem/>
          <span style={{display:"inline-block", width: "100px", height: "100px", background: 'hotpink'}}/>
          <div style={{width: '100px', height:"100px", border: "1px solid black"}}>111</div>
      </Dragable>
  );
}

export default Canvas;
