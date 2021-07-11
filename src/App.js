import Title from "./components/Title";
import Weather from "./components/Weather";
import Todos from "./components/Todos";
import { HashRouter, Route } from "react-router-dom";
import { useState } from "react";
import Aditting from "./routes/Aditting";

function App() {
  const [todos, setTodos] = useState([]);
  const changeTodos = (newTodos) => {
    setTodos(newTodos);
  };

  return (
    <HashRouter>
      <Route path="/" exact={true}>
        <Title />
        <Weather />
        <Todos todos={todos} changeTodos={changeTodos} />
      </Route>
      <>
        {todos.map((eachTodo) => {
          return (
            <Route path={"/" + eachTodo.id}>
              <Aditting
                todos={todos}
                eachTodo={eachTodo}
                changeTodos={changeTodos}
              />
            </Route>
          );
        })}
      </>
    </HashRouter>
  );
}
export default App;
