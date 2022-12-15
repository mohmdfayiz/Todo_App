import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Yeah..! it's Friday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input value={obj.status} onClick={(e)=>{obj.status== false ? alert('Well done🎉') : alert('oooopsssss 😑')}}
                 onChange={(e) => {setToDos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
                }} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={()=>{
                  setToDos(toDos.filter((todo)=>{if(todo.id != obj.id){return todo}}))
                }} ></i>
              </div>
            </div>
          )
        })
        }

        {/* <br />
        <div className="todos">
          <h2>Active 2Dos</h2>
          {
            toDos.map((obj) => {
              if (obj.status) {
                return (
                  <div>
                    <li>{obj.text}</li>
                  </div>

                )
              }
              return null
            })
          }
        </div> */}

      </div>
    </div>
  );
}

export default App;
