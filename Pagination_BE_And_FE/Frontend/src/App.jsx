import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const LIMIT = 10;

  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:3000/api/v1/data?page=${page}&&limit=${LIMIT}`
    );
    const result = await response.json();

    setData(result.data);
    setTotalPages(result.totalPages);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <div>
        <Card data={data} />
      </div>
      <div>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default App;
