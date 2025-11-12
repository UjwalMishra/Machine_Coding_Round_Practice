import "./App.css";
import Notes from "./components/Notes";

function App() {
  const notes = [
    { id: 1, task: "Do DSA" },
    {
      id: 2,
      task: "Do web dev",
    },
    {
      id: 3,
      task: "Do apti",
    },
    {
      id: 4,
      task: "Do revision",
    },
  ];
  return (
    <>
      <Notes notes={notes} />
    </>
  );
}

export default App;
