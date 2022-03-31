export const addEventHandle = (element: HTMLElement, event: string, callback:(event: any) => any) => {
    if (element) {
        element.addEventListener(event, callback)
    }
}

export const removeEventHandle = (element: HTMLElement, event: string, callback:(event: any) => any) => {
    if(element) {
        element.removeEventListener(event, callback)
    }
}
