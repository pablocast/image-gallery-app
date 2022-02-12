import './App.css';
import React, { useState, useRef, useEffect, Fragment } from 'react';


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

const FocusableInput = (props) => {

  const inputRef = useRef();

  useEffect(() => {
    if (props.shouldFocus) {
      inputRef.current.focus();
    }
  })

  // Write your code here
  return <input ref={inputRef} />;
};


const Message = (props) => {
  const [showResults, setShowResults] = useState(false)
  const onClick = () => {
    showResults ? setShowResults(false):setShowResults(true)
  }
  return (
  <Fragment>
    <a href="#" onClick={()=> onClick()}>Want to buy a new car?</a>
    {showResults ? <p>Call +11 22 33 44 now!</p> : null}
  </Fragment>
  );
}



const Title = props => {
  const { text } = props;

  return (
      <h1 >
        {text}
      </h1>
  );
}


const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onListClick} = this.props;
    return (<ul onClick={onListClick}>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }
  
  handleItemClick(item, event) {
    const onItemClick = this.props["onItemClick"];
    if (!item.done) {
      onItemClick(item,event)
  } else {
      event.stopPropagation();
    }
  }
}


const   ToDoApp = (props) => <TodoList
  items={props.items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;





export { App, FocusableInput, Title, Message, ToDoApp };
