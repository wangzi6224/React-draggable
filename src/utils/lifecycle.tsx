import DraggableHOC from "./DraggableHOC";
const UUID = require('uuid-js');

class DragLifecycle {
  private readonly children: {
    dragId: string;
    component: any;
    position?: {x: number, y: number},
    data?: any
  }[];
  private subscribePool: ((children: any) => void)[];
  constructor() {
    this.children = [];
    this.subscribePool = [];
  };

  get generateID() {
    return UUID.create()
  }

  subscribe(fn) {
    this.subscribePool.push(fn)
  }

  notify(callback) {
    this.subscribe(callback)
    return new Promise((resolve) => {
      resolve("registered successfully")
    })
  }

  modifyPosition(dragId: string, position: {x: number, y: number}) {
    for (const child of this.children) {
      if(child.dragId === dragId) {
        child.position = {...position}
        break;
      }
    }
  }

  definedChildren(child: any, position?:{x: number, y: number}) {
    return new Promise((resolve, reject) => {
      try {
        const dragId = this.generateID.hex;

        this.children.push({
          dragId,
          component: DraggableHOC(child, dragId),
          position
        })
        this.subscribePool.forEach(callback => callback(this.children))
        resolve(this.children)
      } catch (error) {
        reject(error);
        console.error(error)
      }
    })
  };

  getUnRegisterChildren(children: any[]) {
    if (children) {
      return new Promise(resolve => {
        if (Array.isArray(children)) {
          children.forEach(__ele__ => {
            this.definedChildren(__ele__)
          });
          this.subscribePool.forEach(callback => callback(this.children))
        } else {
          this.definedChildren(children)
          resolve(this.notify)
        }
      })
    }
  };
}

export const DragInstance = new DragLifecycle()

