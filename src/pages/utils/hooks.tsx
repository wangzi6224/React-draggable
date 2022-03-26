import {useEffect, useRef, useState} from "react";

const useMoveHooks = ({x, y}) => {
    const [_x, set_x] = useState<number>(x);
    const [_y, set_y] = useState<number>(y);
    const ref = useRef<HTMLDivElement>(null);

    const dragHandle = () => {
        ref.current?.addEventListener("mousedown", (__ele__mouse_event) => {
            const bodyMouseMove = (__body__mouse_event: { clientX: number; clientY: number; }) => {
                window.requestAnimationFrame(() => {
                    set_x(__body__mouse_event.clientX - __ele__mouse_event.offsetX - ref.current.offsetLeft)
                    set_y(__body__mouse_event.clientY - __ele__mouse_event.offsetY - ref.current.offsetTop)
                })
            }
            document.body.addEventListener('mousemove', bodyMouseMove);
            ref.current?.addEventListener("mouseup", () => {
                document.body.removeEventListener('mousemove', bodyMouseMove)
            })
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
