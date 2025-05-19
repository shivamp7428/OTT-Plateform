import React, { useEffect, useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

const Tamil = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/MovieRoute/tamil")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Failed to fetch movies:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Tamil Movies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {movies.map((movie, index) => (
          <div key={index} className=" relative group border border-gray-800 rounded shadow p-3">
            <img
              src={movie.image?.url}
              alt={movie.title}
              className="w-full h-90 object-cover rounded"
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
        ))}
      </div>
    </div>
  );
};

export default Tamil;
