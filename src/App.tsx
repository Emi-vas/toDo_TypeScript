import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  return (
    <div>
      <h1
        style={{
          color: "lightcoral",
          marginLeft: '20px'
        }}
      >Todo TypeScript</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
};

export default App;