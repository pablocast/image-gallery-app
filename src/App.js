import './App.css';
import React, { useState } from 'react';


function App(props) {
  let [visible, setVisible] = useState(props.links.map((link) => true));
  const remove = (idx) => {
    let current = visible
    current[idx] = false
    setVisible([...current])
  }
  return (
    <div>
      {visible.map((isVisible, idx) => {
        return (
          isVisible ?
            <div className="image" key={idx}>
              <img src={props.links[idx]} />
              <button className="remove" onClick={() => remove(idx)}>X</button>
            </div> : null
        )
      }
      )
      }
    </div>
  );
}

export default App;
