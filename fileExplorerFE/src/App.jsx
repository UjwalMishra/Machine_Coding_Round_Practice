import "./App.css";
import FileExplorer from "./components/FileExplorer";
import data from "./data.json";
function App() {
  return (
    <>
      <FileExplorer fileData={data} />
    </>
  );
}

export default App;
