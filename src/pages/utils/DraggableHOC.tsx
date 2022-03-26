import React from "react";
import {useMoveHooks} from "./hooks";
import './styles/Draggable.css';

type DraggableHOCType = (REACT_CHILD_ELE: any, position?: {x: number; y: number}) => React.FC<any>

const DraggableHOC: DraggableHOCType = (REACT_CHILD_ELE, position = {x: 0, y: 0}) => {
    const Component: React.FC<any> = () => {
        const {_x, _y, ref} = useMoveHooks({x: position.x, y: position.y});
        return (
            <div
                className="Draggable"
                style={{transform: `translate(${_x}px, ${_y}px)`}}
                ref={ref}
            >
                {REACT_CHILD_ELE}
                {/*<span className="editPoint left-top"/>
                <span className="editPoint left-bottom"/>
                <span className="editPoint right-top"/>
                <span className="editPoint right-bottom"/>*/}
            </div>
        )
    }
    return Component
};

export default DraggableHOC;
