import { IoMdSearch } from 'react-icons/io';

export default function SearchInput() {
  return (
    <div>
      <form className="flex items-center w-full">
        <label className="sr-only">Search</label>
        <div className="w-full">
          <input
            type="text"
            id="simple-search"
            className=" border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5 outline-none"
            placeholder="Search announcement..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <IoMdSearch className="w-4 h-4" />
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
}
