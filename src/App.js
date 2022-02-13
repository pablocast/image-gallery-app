import './App.css';
import React, { Component,useState, useRef, useEffect, Fragment } from 'react';


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


const Product = props => {
  const plus = () => {
    props.onVote(+1, props.index)
  };
  const minus = () => {
    props.onVote(-1, props.index)
  };
  return (
    <li>
      <span>{props.name}</span> - <span>votes: {props.votes}</span>
      <button onClick={plus}>+</button>{" "}
      <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = useState(props.products);
  const onVote = (dir, index) => {
    let items = [...products]
    let product = {...items[index]}
    product.votes += dir
    items[index] = product
    setProducts([...items])
  };

  return products.map( (product,idx) => {
    return (       
    <ul key={idx}>
      <Product {...product} onVote={onVote} index={idx}/>
    </ul>
      )
  });
}

class Username extends Component {
  state = { value: "" };

  changeValue(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return <h1> {value}</h1>;
  }
}

function ChangeUserNameApp() {
  const [userName, setUserName] = useState('')
  const oldUserNameRef = useRef('')
  function clickHandler() { 
    setUserName(oldUserNameRef.current.value)
  }

  return (
    <div>
      <button onClick={clickHandler}>Change Username</button>
      <input type="text"  ref={oldUserNameRef}/>
      {
        userName ? 
        <h1>{userName}</h1>:
        <Username />
      }
    </div> 
  );
}

const SecurityContext = React.createContext({ username: "", permissions: [] });

const ControlsComponent = (props) => {
  return (
    <SecurityContext.Provider value={{ username: props.username }}>
      <LogoutWrapper></LogoutWrapper>
    </SecurityContext.Provider>
  );
};

const LogoutWrapper = (props) => {
  var context = React.useContext(SecurityContext);
  
  return (
    <div>
      <p>{context.username}</p>
      <button>Click here to logout</button>
    </div>
  );
};


class Input extends React.PureComponent {
  render() {
    let {forwardedRef, ...otherProps} = this.props; 
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />
});

class FocusableInputApp extends React.Component {
  
  ref = React.createRef()

  render() {
    return <TextInput ref={this.ref} />;
  }

  componentDidUpdate(prevProps) {
    let {focused} = this.props; 
    if (focused !== prevProps.focused ) {
      this.ref.current.focus();
    }
  }
  
  componentDidMount() {
    let {focused} = this.props; 
    if (focused){
      this.ref.current.focus();
    }
  }
}

FocusableInputApp.defaultProps = {
  focused: false
};


export { App, FocusableInput, Title, Message, ToDoApp, GroceryApp, ChangeUserNameApp, ControlsComponent, FocusableInputApp};
