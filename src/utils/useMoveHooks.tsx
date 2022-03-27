import {useEffect, useRef, useState} from "react";
import {DragInstance} from "./lifecycle";

const useMoveHooks = ({x, y}, dragId) => {
    const [_x, set_x] = useState<number>(x);
    const [_y, set_y] = useState<number>(y);
    const ref = useRef<HTMLDivElement>(null);

    const dragHandle = () => {
        ref.current?.addEventListener("mousedown", (ELE__MOUSE_EVENT) => {
            let __ModifyX__ = 0;
            let __ModifyY__ = 0;

            const bodyMouseMove = (BODY__MOUSE_EVENT: { clientX: number; clientY: number; }) => {
                window.requestAnimationFrame(() => {
                    set_x(BODY__MOUSE_EVENT.clientX - ELE__MOUSE_EVENT.offsetX - ref.current.offsetLeft);
                    set_y(BODY__MOUSE_EVENT.clientY - ELE__MOUSE_EVENT.offsetY - ref.current.offsetTop);
                    __ModifyX__ = BODY__MOUSE_EVENT.clientX - ELE__MOUSE_EVENT.offsetX - ref.current.offsetLeft;
                    __ModifyY__ = BODY__MOUSE_EVENT.clientY - ELE__MOUSE_EVENT.offsetY - ref.current.offsetTop
                })
            }

            const bodyMouseUp = () => {
                DragInstance.modifyPosition(dragId, {x: __ModifyX__, y: __ModifyY__});
                document.body.removeEventListener('mousemove', bodyMouseMove)
                ref.current?.removeEventListener("mouseup", bodyMouseUp);
            }

            document.body.addEventListener('mousemove', bodyMouseMove);
            ref.current?.addEventListener("mouseup", bodyMouseUp)
        })
    }

    useEffect(() => {
        dragHandle()
    }, []);

    return {
        _x, _y, ref
    }
};

export {
    useMoveHooks
}
