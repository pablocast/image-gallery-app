import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, FocusableInput, Title, Message, ToDoApp, GroceryApp, ChangeUserNameApp, ControlsComponent, FocusableInputApp} from './App';
import reportWebVitals from './reportWebVitals';


const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj", "https://bit.ly/3flyaMj"];
const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];
const products= [
  { name: "Oranges", votes: 0 },
  { name: "Bananas", votes: 0 }
];

ReactDOM.render(
  <React.StrictMode>
    <Title text ={"Exercisio: Gallery"} />
    <App links={links} />
    <Title text ={"Exercisio: Input com Focus"} />
    <FocusableInput shouldFocus={true} />
    <Title text ={"Exercisio: Fragment desaparecendo"} />
    <Message />
    <Title text ={"Exercisio: ToDoApp"} />
    <ToDoApp items={items} />
    <Title text ={"Exercisio: GroceryApp"} />
    <GroceryApp products={products} />
    <Title text ={"Exercisio:ChangeUserName"} />
    <ChangeUserNameApp products={products} />
    <Title text ={"Exercisio:LogOutWrapper"} />
    <ControlsComponent username="James" />
    <Title text ={"Exercisio:Focusable Input"} />
    <FocusableInputApp focused={true} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
