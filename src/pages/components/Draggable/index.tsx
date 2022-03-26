import React, { useEffect, useState } from 'react';
import {DragInstance} from '../../utils/'

const Draggable: React.FC<any> = props => {
  const [children, setChildren] = useState<any>([]);

  useEffect(() => {
      DragInstance.notify((result) => {
          setChildren([...result])
          console.log(result);
      });
      DragInstance.getUnRegisterChildren(props.children);
  }, []);

  return (
    <>
      {
          children.map(Element =>
              React.createElement(
                  Element.component,
                  {
                      key: Element.dragId
                  }
              )
          )
      }
    </>
  );
}

export default Draggable;
