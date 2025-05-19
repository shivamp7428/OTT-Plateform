import React, { useEffect, useState } from "react";
import { BsFillCaretRightFill } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa6';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (!isOnline) return;

    setLoading(true);
    fetch("http://localhost:8000/api/v1/MovieRoute/movie")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Failed to fetch movies:", err))
      .finally(() => setLoading(false));
  }, [isOnline]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  const moviesToDisplay = query ? filteredMovies : movies.slice(0, 10);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="fixed top-0 left-0 right-0 bg-gray-900 z-50 p-4 flex justify-center border-b border-gray-700">
        <input
          type="text"
          placeholder="Search by movie title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 w-full max-w-md rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none"
          disabled={!isOnline || loading}
        />
      </div>

      <div className="pt-24 px-6">
        {!isOnline && (
          <div className="text-center flex justify-center mt-30 items-center text-red-500 font-semibold mb-4">
            <div>
              <img src="user.png" alt="offline" className="w-30 h-30" />
              No Internet.
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center">
            <div
              className="w-12 h-12 border-4 border-t-blue-500 border-blue-300 rounded-full animate-spin"
              aria-label="Loading"
            ></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {moviesToDisplay.length > 0 ? (
              moviesToDisplay.map((movie) => (
                <div
                  key={movie._id}
                  className=" relative group bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                >
                  <img
                    src={movie.image?.url}
                    alt={movie.title}
                    className="w-full h-90 object-cover"
                  />
                 <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <img src={movie.image?.url} alt={movie.title} className="w-full h-40 rounded" />
                    <p className="text-blue-600 font-bold">ShivSubStar Special</p>
                     <h2 className="text-xl font-bold">{movie.title}</h2>

                   <div className="flex mt-4 gap-2">
                     <a
                      href="#"
                      className="flex items-center justify-center font-bold font-serif text-sm text-white p-2 bg-gradient-to-r from-blue-500 to-gray-500 rounded transition"
                      >
                     <BsFillCaretRightFill className="w-6 h-6 md:w-8 md:h-8" />
                      Watch Movie
                     </a>
                   <a
                     href="#"
                    className="flex bg-gray-500 items-center justify-center pl-3 pr-3 rounded font-serif hover:bg-white/10 transition"
                    >
                    <FaPlus className="w-6 h-6" />
                 </a>
             </div>
               <p className="text-sm mt-2">Hindi | English | Telugu | Tamil | Malayalam</p>
                 </div>
                </div>
              ))
            ) : (
              isOnline &&
              query && (
                <div className="text-white flex justify-center items-center mt-30 col-span-full">
                  <div className="text-yellow-300 text-center">
                    <img
                      src="communication.png"
                      alt="Not Found"
                      className="h-30 w-30 mx-auto"
                    />
                    No Movie Found
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
