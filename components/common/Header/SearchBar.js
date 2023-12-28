const SearchBar = () => {
  return (
    <form>
      <div className="flex items-center border rounded-md border-primary">
        <input
          type="text"
          placeholder="Search"
          className=" w-[450px] rounded-l-md p-1 focus:outline-none bg-transparent"
        />
        <button type="submit" className="bg-primary rounded-r-md p-1 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
