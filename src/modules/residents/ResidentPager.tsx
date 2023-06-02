interface Props {
  currentPage: number;
  setPage: (page: number) => void;
  totalCount: number;
}
function ResidentPager(props: Props) {
  const { currentPage, totalCount, setPage } = props;
  return (
    <div className=" p-4 flex justify-between text-lg w-full">
      <button
        className="border-none"
        disabled={currentPage === 1}
        name="previous"
        onClick={() => setPage(currentPage - 1)}
      >
        &lt; Previous
      </button>
      <h4>Page: {currentPage}</h4>
      <button
        className="border-none"
        disabled={currentPage * 10 > totalCount}
        name="next"
        onClick={() => setPage(currentPage + 1)}
      >
        Next &gt;
      </button>
    </div>
  );
}
export default ResidentPager;
