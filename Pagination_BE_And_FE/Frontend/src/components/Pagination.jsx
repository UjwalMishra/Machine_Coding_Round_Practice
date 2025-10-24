const Pagination = ({ page, setPage, totalPages }) => {
  const setPageHandler = (idx) => {
    setPage(idx + 1);
  };
  return (
    <div className="page-container">
      <button disabled={page == 1} onClick={() => setPage((prev) => prev - 1)}>
        Previous
      </button>
      {[...Array(totalPages).keys()].map((val, idx) => {
        return (
          <button
            onClick={() => setPageHandler(idx)}
            className="page-count"
            key={idx}
            style={
              page - 1 === idx
                ? { backgroundColor: "black", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          >
            {val + 1}
          </button>
        );
      })}
      <button
        disabled={page == totalPages}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
