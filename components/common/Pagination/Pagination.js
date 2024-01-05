import Link from "next/link";

const Pagination = ({ totalPage, currentPage }) => {
  return (
    <div className="w-full flex justify-center py-7 sm:py-10">
      <div className="flex">
        <Link href={`?page=${currentPage - 1}`}>
          <button
            disabled={currentPage == 1}
            className="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-[#00AAA1] hover:text-white rounded-md disabled:bg-gray-100 disabled:text-gray-300"
          >
            <span className="hidden sm:flex">
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
            </span>
            Prev
          </button>
        </Link>

        {[...Array(totalPage)].map((_, i) => (
          <Link
            href={`?page=${i + 1}`}
            className={`${
              currentPage == i + 1
                ? "bg-[#00AAA1] text-white"
                : " bg-white text-gray-500"
            } flex items-center justify-center px-3 h-8 me-3 text-sm font-medium border border-gray-300 hover:bg-[#00AAA1] hover:text-white rounded-md`}
            key={i}
          >
            {i + 1}
          </Link>
        ))}

        <Link href={`?page=${currentPage + 1}`}>
          <button
            disabled={currentPage === totalPage}
            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-[#00AAA1] hover:text-white rounded-md disabled:bg-gray-100 disabled:text-gray-300"
          >
            Next
            <span className="hidden sm:flex">
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
