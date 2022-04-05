import './main.css';
import React,{useState} from "react";
import CreateTodoItem from "./components/createtodo/CreateTodoItem";
import CreateNewTodo from "./components/createtodo/CreateNewTodo";

function Main() {
    const [modalActive, setModalActive] = useState(false)
    const [items,setItems] = useState([
        {title:'title',description:'description',fav:false,complite:false},
        {title:'title2',description:'description2',fav:false,complite:false}
    ])
  return (
      <div className='container'>
          <button onClick={() => setModalActive(true)}>Create task</button>
          {items.map((item) =>
              <CreateTodoItem item={item}/>
          )}
          <CreateNewTodo active={modalActive} setActive={setModalActive}/>
      </div>
  );
}

export default Main;
