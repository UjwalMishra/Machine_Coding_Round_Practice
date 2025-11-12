import "./App.css";
import Notes from "./components/Notes";

function App() {
  const todos = {
    College: ["Attend Lectures", "Make practical file", "Attend labs"],
    Home: ["Help parents", "Go to gym"],
    Grind: ["Do DSA", "Do webdev", "Make projects"],
  };
  return (
    <>
      <Notes todos={todos}></Notes>
    </>
  );
}

export default App;
