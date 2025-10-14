import "./App.css";
import Notes from "./components/Notes";

function App() {
  const initialData = {
    Todo: ["Do 2 DSA ques", "Do 2 Machine coding questions"],
    Completed: ["Revised DSA", "Pushed code"],
    "In Progress": ["Learning skills", "Web development", "Devops skills"],
  };

  return (
    <div>
      <Notes initialData={initialData}></Notes>
    </div>
  );
}

export default App;
