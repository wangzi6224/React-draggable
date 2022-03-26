import React, { useEffect, useState } from 'react';
import {dragLifecycle} from '../../utils/'

const Draggable: React.FC<any> = props => {
  const [children, setChildren] = useState<any>([]);

  useEffect(() => {
      dragLifecycle.notify((result) => {
          setChildren([...result])
          console.log(result);
      })
      dragLifecycle.getUnRegisterChildren(props.children)
  }, []);

  return (
    <>
      {
          children.map((Element, index) =>
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
