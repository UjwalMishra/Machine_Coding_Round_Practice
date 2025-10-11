function Pagination({ NumberOfPages, setCurrentPage, currentPage }) {
  function adjustCurrentPage(number) {
    setCurrentPage(number);
  }

  function goToPrev() {
    setCurrentPage((prev) => prev - 1);
  }

  function goToNext() {
    setCurrentPage((prev) => prev + 1);
  }

  console.log(currentPage);

  return (
    <div className="Pagination">
      <div className="btnParent">
        <button
          className="btns"
          onClick={goToPrev}
          disabled={currentPage === 0}
        >
          Previous
        </button>
      </div>

      {[...Array(NumberOfPages).keys()].map((number) => {
        return (
          <button
            className={`PaginationBox btns ${
              currentPage == number ? "active" : ""
            }`}
            onClick={() => {
              adjustCurrentPage(number);
            }}
            key={number}
          >
            {number}
          </button>
        );
      })}
      <div className="btnParent">
        <button
          className="btns"
          onClick={goToNext}
          disabled={currentPage === NumberOfPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
