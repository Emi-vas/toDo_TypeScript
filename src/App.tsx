import { useState } from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

const App = () => {

  const [refreshList, setRefreshList] = useState(false)

  return (
    <div>
      <h1
        style={{
          color: "lightcoral",
          marginLeft: '20px'
        }}
      >Todo TypeScript</h1>
      <AddTodo refreshList={refreshList} setRefreshList={setRefreshList}/>
      <ListTodo refreshList={refreshList}/>
    </div>
  );
};

export default App;