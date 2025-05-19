import React, { useEffect, useState } from "react";
import { BsFillCaretRightFill } from 'react-icons/bs';
import { FaPlus } from "react-icons/fa6";


const images = [
  {
    img: "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1813/1746883281813-i",
    title: "M ROADIES",
    description: "After 19 Seasons, Roadies is back! Season 20 introduces a thrilling new element: betrayal. Expect the unexpected.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    img: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3622/1746779793622-i",
    title: "Hochhe Ta Ki",
    description: "What the tea? From juicy gossips, explosive rapid fire rounds to exclusive BTS moments, unravel the world of Jalsha Parivaar—everything unfiltered!",
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    img: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/2454/1747205742454-i",
    title: "Horror",
    description: "That is the highest horror thriller movie!",
    video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
  },
  {
    img: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/5649/1745919175649-i",
    title: "Grand weapon",
    description: "Commercial after every season, Grand Weapon is back!",
    video: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4"
  },
  {
    img: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/485/1350485-i-65c0ce83091f",
    title: "Funny Moments",
    description: "Come back of these funny moments and life is full of emojis!",
    video: "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4"
  },
  {
    img: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7840/1747047307840-i",
    title: "One Night go",
    description: "This is a romantic thriller!",
    video: "https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_5mb.mp4"
  },
  {
    img: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8443/1746708098443-i",
    title: "Bittu Bahane Baaz",
    description: "10-year-old Bittu, a witty trickster, always finds clever, hilarious ways to escape trouble in this fast-paced, surprise-filled comedy!",
    video: "https://filesamples.com/samples/video/mp4/sample_640x360.mp4"
  },
  {
    img: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/2951/1744908112951-i",
    title: "jwsferaju",
    description: "Robert Egger's Nosferatu is a gothic tale of obsession between a young woman and a terrifying vampire infatuated with her, causing horror in its wake.",
    video: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4"
  }
];




const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/MovieRoute/movie")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Failed to fetch movies:", err));
  }, []);

  // Headers episode
const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[currentIndex];

  return (
  <>
    <div  className="relative  min-h-screen w-full bg-cover bg-center transition-all  duration-500" >
       <video className="absolute md:pl-7  top-0 left-0 w-full h-full object-cover" src={currentImage.video}  autoPlay muted  loop  playsInline />
        <div className="absolute top-70 left-8  bg-opacity-70 text-white rounded-xl p-4 max-w-md">
        <p className="text-blue-600 font-bold">ShivSubStar Special</p>
        <h2 className="text-5xl font-bold ">{currentImage.title}</h2>
        <p className="text-xl text-gray-300 font-bold mt-2">{currentImage.description}</p>
        <div className="flex gap-5 mt-20">
  {/* Watch Movies Button */}
  <a
    href="#"
    className="flex items-center justify-center gap-2 font-bold font-serif text-xl text-white p-4 px-8 bg-gradient-to-r from-blue-500 to-gray-500 rounded transition"
  >
    <BsFillCaretRightFill className="w-6 h-6 md:w-8 md:h-8" />
    Watch Movies
  </a>

  {/* Plus Icon Button */}
  <a
    href="#"
    className="flex items-center justify-center p-4 rounded font-serif font-extralight backdrop-blur-sm hover:bg-white/10 transition"
  >
    <FaPlus className="w-6 h-6" />
  </a>
     </div>
     </div>

      <div className="absolute bottom-4 right-4  bg-opacity-70 rounded-xl p-2 flex items-center gap-2">
        <button
          className="text-blue-400 text-4xl font-bold px-2 hover:text-blue-600"
          onClick={prevImage}
        >
          ‹
        </button>
        <img
          src={currentImage.img}
          alt={currentImage.title}
          className="rounded-lg w-32 h-20 object-cover"
        />
        <button
          className="text-blue-400 text-4xl font-bold px-2 hover:text-blue-600"
          onClick={nextImage}
        >
          ›
        </button>
      </div>
    </div>
   
  <div className="p-6 pt-0 text-white min-h-screen">
  <h1 className="font-bold text-2xl"> Latest Movie</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
    {movies.map((movie) => (
      <div
        key={movie._id}
        className="relative group bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
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
    ))}
  </div>
</div>

  </>
  );
};

export default Home;
