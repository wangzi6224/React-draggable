import DraggableHOC from "./DraggableHOC";
import React from "react";

class DragLifecycle {
  children: {
    dragId: Symbol;
    component: React.ReactChild
  }[];
  constructor() {
    this.children = [];
  };

  definedChildren(child: any) {
    this.children.push({
      dragId: child.$$typeof,
      component: child
    })
  };

  getUnRegisterChildren(children: any[]) {
    return new Promise(resolve => {
      if (Array.isArray(children)) {
        children.forEach(__ele__ => {
          this.definedChildren(DraggableHOC(__ele__))
        });
        resolve(this.children.map(__FILTER_COMPONENT__=>__FILTER_COMPONENT__.component))
      } else {
        this.definedChildren(DraggableHOC(children))
        resolve(this.children.map(__FILTER_COMPONENT__=>__FILTER_COMPONENT__.component))
      }
    })
  };
}

export const dragLifecycle = new DragLifecycle()

