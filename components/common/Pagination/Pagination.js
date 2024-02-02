import Link from "next/link";

const Pagination = ({ totalPage, currentPage }) => {
  return (
    <div className="flex w-full justify-center py-7 sm:py-10">
      <div className="flex">
        <Link href={`?page=${currentPage - 1}`} scroll={false}>
          <button
            disabled={currentPage == 1}
            className="me-3 flex h-8 items-center justify-center rounded-md border border-gray-300 bg-white px-3 text-sm font-medium text-gray-500 hover:bg-[#00AAA1] hover:text-white disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-200 dark:disabled:bg-gray-500"
          >
            <span className="hidden sm:flex">
              <svg
                className="me-2 h-3.5 w-3.5 rtl:rotate-180"
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
            scroll={false}
            className={`${
              currentPage == i + 1
                ? "bg-[#00AAA1] text-white"
                : " bg-white text-gray-500 dark:bg-slate-800 dark:text-gray-200"
            } me-3 flex h-8 items-center justify-center rounded-md border border-gray-300 px-3 text-sm font-medium hover:bg-[#00AAA1] hover:text-white dark:border-gray-700`}
            key={i}
          >
            {i + 1}
          </Link>
        ))}

        <Link href={`?page=${currentPage + 1}`} scroll={false}>
          <button
            disabled={currentPage === totalPage}
            className="me-3 flex h-8 items-center justify-center rounded-md border border-gray-300 bg-white px-3 text-sm font-medium text-gray-500 hover:bg-[#00AAA1] hover:text-white disabled:bg-gray-100 disabled:text-gray-300 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-200 dark:disabled:bg-gray-500"
          >
            Next
            <span className="hidden sm:flex">
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
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
