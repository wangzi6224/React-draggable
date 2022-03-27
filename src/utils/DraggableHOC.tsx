import React from "react";
import {useMoveHooks} from "./useMoveHooks";
import './styles/Draggable.css';

type DraggableHOCType = (REACT_CHILD_ELE: any, dragId: string, position?: {x: number; y: number}) => React.FC<any>

const DraggableHOC: DraggableHOCType = (REACT_CHILD_ELE, dragId, position = {x: 0, y: 0}) => {
    const Component: React.FC<any> = () => {
        const {_x, _y, ref} = useMoveHooks({x: position.x, y: position.y}, dragId);

        return (
            <>
                <div
                    id={dragId}
                    className="Draggable"
                    style={{transform: `translate(${_x}px, ${_y}px)`}}
                    ref={ref}
                >
                    {REACT_CHILD_ELE}
                </div>
            </>
        )
    }
    return Component
};

export default DraggableHOC;
