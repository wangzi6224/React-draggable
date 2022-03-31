import React from "react";
import {useMoveHooks} from "./useMoveHooks";
import './styles/Draggable.css';

type DraggableHOCType = (REACT_CHILD_ELE: any, dragId: string, position?: {x: number; y: number}) => React.FC<any>

const DraggableHOC: DraggableHOCType = (REACT_CHILD_ELE, dragId, position = {x: 0, y: 0}) => {
    const Component: React.FC<any> = () => {
        const {_x, _y, ref} = useMoveHooks({x: position.x, y: position.y}, dragId);

        return (
            <>
                {
                    typeof REACT_CHILD_ELE.type === 'string' &&
                    React.cloneElement(REACT_CHILD_ELE, {
                        ...REACT_CHILD_ELE.props,
                        id:`${dragId}`,
                        className:"Draggable",
                        style:{
                            ...REACT_CHILD_ELE.props.style,
                            transform: `translate(${_x}px, ${_y}px)`
                        },
                        ref
                    })
                }
                {
                    typeof REACT_CHILD_ELE.type === 'function' && REACT_CHILD_ELE.type.toString().slice(0, 5) !== "class" && React.cloneElement(REACT_CHILD_ELE.type(),{
                        ...REACT_CHILD_ELE.props,
                        id:`${dragId}`,
                        className:"Draggable",
                        style:{
                            ...REACT_CHILD_ELE.type().props.style,
                            transform: `translate(${_x}px, ${_y}px)`
                        },
                        ref
                    })
                }
            </>
        )
    }
    return Component
};

export default DraggableHOC;
