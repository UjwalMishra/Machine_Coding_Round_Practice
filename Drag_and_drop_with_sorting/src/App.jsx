import "./App.css";
import Notes from "./components/Notes";

function App() {
  const notes = [
    {
      id: 1,
      data: "Do DSA",
    },
    {
      id: 2,
      data: "Do apti",
    },
    {
      id: 3,
      data: "Do development",
    },
    {
      id: 4,
      data: "Revise core subs",
    },
  ];
  return (
    <div>
      <Notes notes={notes}></Notes>
    </div>
  );
}

export default App;
