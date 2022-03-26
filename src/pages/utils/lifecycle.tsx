import DraggableHOC from "./DraggableHOC";
const UUID = require('uuid-js');

class DragLifecycle {
  private readonly children: {
    dragId: string;
    component: any;
    position?: {x: number, y: number}
  }[];
  private subscribePool: any[];
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

  modifyPosition(dragId, position) {

  }

  definedChildren(child: any, position?:{x: number, y: number}) {
    return new Promise((resolve, reject) => {
      try {
        this.children.push({
          dragId: this.generateID.hex,
          component: DraggableHOC(child),
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

export const dragLifecycle = new DragLifecycle()

