import AddTodo from "./components/AddTodo";

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
    </div>
  );
};

export default App;