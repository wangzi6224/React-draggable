import {useEffect, useRef, useState} from "react";

const useMoveHooks = () => {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const ref = useRef<HTMLDivElement>(null);

    const dragHandle = () => {
        ref.current?.addEventListener("mousedown", (__ele__mouse_event) => {
            const bodyMouseMove = (__body__mouse_event: { clientX: number; clientY: number; }) => {
                window.requestAnimationFrame(() => {
                    setX(__body__mouse_event.clientX - __ele__mouse_event.offsetX - ref.current.offsetLeft)
                    setY(__body__mouse_event.clientY - __ele__mouse_event.offsetY - ref.current.offsetTop)
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
        x, y, ref
    }
};

export {
    useMoveHooks
}
