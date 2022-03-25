import React from "react";
import {useMoveHooks} from "./hooks";
import './styles/Expand.css'

const DraggableHOC = (REACT_CHILD_ELE) => {
    const Component: React.FC<any> = () => {
        const {x, y, ref} = useMoveHooks();
        return (
            <span
                className="Dragable"
                style={{transform: `translate(${x}px, ${y}px)`}}
                ref={ref}
            >
                {REACT_CHILD_ELE}
                {/*<span className="editPoint left-top"/>
                <span className="editPoint left-bottom"/>
                <span className="editPoint right-top"/>
                <span className="editPoint right-bottom"/>*/}
            </span>
        )
    }
    return Component
};

export default DraggableHOC;
