import React, { useEffect, useState } from 'react';
import {DragInstance} from '../utils'

const Draggable: React.FC<any> = props => {
  const [children, setChildren] = useState<any>([]);

  useEffect(() => {
      DragInstance.notify((result) => {
          setChildren([...result])
      });
      DragInstance.getUnRegisterChildren(props.children);
  }, []);

  return (
    <>
      {
          React.Children.map(children.map(Element =>
              React.createElement(
                  Element.component,
                  {
                      key: Element.dragId
                  }
              )
          ), child => child)
          /*children.map(Element =>
              React.createElement(
                  Element.component,
                  {
                      key: Element.dragId
                  }
              )
          )*/
      }
    </>
  );
}

export default Draggable;
