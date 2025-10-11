import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const PAGE_SIZE = 10;

  async function fetchData() {
    setLoading(true);

    try {
      const res = await axios.get("https://dummyjson.com/products?limit=500");
      setData(res.data.products);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const Number_Of_Products = data.length;
  const Number_Of_Pages = Math.ceil(Number_Of_Products / PAGE_SIZE);

  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  console.log(data);

  return (
    <div className="Parent">
      {loading == true && <div className="loader">Loading....</div>}
      {!loading && (
        <div>
          <div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              NumberOfPages={Number_Of_Pages}
            ></Pagination>
          </div>
          <div className="ProductParent">
            {data.slice(start, end).map((val) => {
              return <ProductCard key={val.id} val={val} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
