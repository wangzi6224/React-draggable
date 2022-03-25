import React, { useEffect, useState } from 'react';
import {dragLifecycle} from '../../utils/'

const Dragable: React.FC<any> = props => {
  const [children, setChildren] = useState<any>([]);

  useEffect(() => {
      dragLifecycle.getUnRegisterChildren(props.children).then(children=>{
        setChildren(children)
      })
  }, []);

  return (
    <>
      {
          children.map((Element, index) =>
              React.createElement(
                  Element,
                  {
                      key: index
                  }
              )
          )
      }
    </>
  );
}

export default Dragable;
