import React from "react";
import Draggable from "../Draggable";
import './index.css';

const Aaa = () => {
    return <div style={{width: '300px', height: "300px", background: "green"}}>
        2222
    </div>
}

class Bbb extends React.PureComponent{
    render() {
        return <div style={{width: "90px", height: "90px", background: "gainsboro"}}>
            3333
        </div>;
    }
}

const Example:React.FC = () => {
    return (
        <div className="container">
            <Draggable>
                <Aaa/>
                <Bbb></Bbb>
                <div style={{width: '100px', height: '100px', background: '#f99'}}>111</div>
                <div style={{width: '100px', height: '100px', background: '#f99'}}>111</div>
                <div style={{width: '100px', height: '100px', background: '#f99'}}>111</div>
            </Draggable>
        </div>
    )
};

export default Example;
