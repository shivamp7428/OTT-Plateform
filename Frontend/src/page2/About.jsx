import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
const About = () => {
  return (
  <>
  <div className="bg-black text-white min-h-80 flex justify-center items-center px-4 py-10 sm:py-16">
  <div className="text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">About Us</h1>
    <p className="mt-4 text-sm sm:text-base">
      <a href="#" className=" hover:underline">Home</a> / 
      <a href="#" className=" hover:underline ml-1">About Us</a>
    </p>
  </div>
</div>

<div className="bg-black/90 min-h-screen text-white pt-20 pb-10 md:pb-0 px-6 md:px-20 flex flex-col lg:flex-row gap-10">
  <div className="flex-1">
    <div className="flex gap-5 items-start">
      <div className="w-2 md:w-5 h-20 md:h-34 bg-gradient-to-b from-red-500 to-black" />
      <div className="font-extrabold">
        <p className="flex items-center gap-2 font-extralight text-sm tracking-widest">
          OUR STORY <BsArrowDown />
        </p>
        <h1 className="md:text-3xl text-xl mt-3 font-serif">
          Your Vision. Our Expertise. Your <br className="hidden md:block" />
          Success. Get Noticed. Generate <br className="hidden md:block"/>
          <span className="text-red-400">Leads Dominate.</span>
        </h1>
      </div>
    </div>
    <img
      src="About.jpg"
      alt="About"
      className="w-full max-w-md h-auto rounded-2xl shadow mt-10"
    />
  </div>

 
  <div className="flex-1">
    <div className="md:block hidden">
     <div className="flex gap-3 ">
      <img
        src="https://media.istockphoto.com/id/1214528636/photo/sister-watching-tv-at-home-stock-photos.webp?a=1&b=1&s=612x612&w=0&k=20&c=RrlVfx_LSoNqIcCPMN29hfuRZp_c-nrFr0JZHG9mI6k="
        alt="about"
        className="w-1/2 rounded-2xl object-cover"
      />
      <img
        src="https://media.istockphoto.com/id/1218800128/photo/christmas-isnt-complete-without-a-fun-movie-marathon.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q9zMD4YMfRrjQ-JoEiSBk6IW6aQw-bu8HTbi0i5Uq8k="
        alt="about"
        className="w-1/2 rounded-2xl object-cover"
      />
    </div>
    </div>

    <p className="text-sm mt-10 font-serif leading-relaxed">
      Dive into a world of blockbuster movies, trending web series, and exclusive originals –
      all at your fingertips. Whether you're into action, drama, comedy, or spirituality, 
      there's something here for everyone. Enjoy seamless streaming anytime, anywhere,
      on any device. With <strong>ShivSubStar</strong>, experience entertainment the way you love – 
      unlimited, uninterrupted, and unforgettable.
    </p>
 <div className="flex gap-3 mt-5 md:hidden ">
      <img
        src="https://media.istockphoto.com/id/1214528636/photo/sister-watching-tv-at-home-stock-photos.webp?a=1&b=1&s=612x612&w=0&k=20&c=RrlVfx_LSoNqIcCPMN29hfuRZp_c-nrFr0JZHG9mI6k="
        alt="about"
        className="w-1/2 rounded-2xl object-cover"
      />
      <img
        src="https://media.istockphoto.com/id/1218800128/photo/christmas-isnt-complete-without-a-fun-movie-marathon.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q9zMD4YMfRrjQ-JoEiSBk6IW6aQw-bu8HTbi0i5Uq8k="
        alt="about"
        className="w-1/2 rounded-2xl object-cover"
      />
    </div>

    <div className="flex mt-10 gap-6 items-center flex-wrap">
      <div className="flex -space-x-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimBjy1PGA_CkSF0Pz3L0RwRQJSNI5ZbW-KQ&s"
          alt="user1"
          className="md:w-20 md:h-20  h-14 w-14 rounded-full border border-black "
        />
        <img
          src="https://i.pinimg.com/736x/14/10/b5/1410b53586de3c791ad25376d8708f94.jpg"
          alt="user2"
          className="md:w-20 md:h-20  h-14 w-14 rounded-full border border-black "
        />
        <img
          src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/thalapathy-vijay-goat-recensored-280040993-16x9_0.jpg"
          alt="user3"
          className="md:w-20 md:h-20  h-14 w-14 rounded-full border border-black "
        />
      </div>

      <a href="/Home" className="flex items-center gap-3 font-serif text-red-400 hover:text-white transition">
        <div className="md:w-20 md:h-20  h-14 w-14 rounded-full border border-red-500 flex items-center justify-center">
          <BsFillCaretRightFill className="w-5 h-5" />
        </div>
        Watch Movies
      </a>
    </div>
  </div>
</div>

<div
  className="w-full h-full bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.indianexpress.com/2017/06/wonder-woman-759.jpg?w=414')",
  }}
>
  <div className="backdrop-blur-sm bg-black/70 w-full h-full px-6 md:px-20 py-10 flex flex-col lg:flex-row items-center gap-10">
    {/* Left Content */}
    <div className="text-white flex-1">
      <p className="flex items-center gap-2 font-extralight text-sm tracking-widest">
        OUR STORY <BsArrowDown />
      </p>
      <h1 className="text-2xl md:text-4xl mt-3 font-serif font-extrabold">
        Step into the World of{" "}
        <span className="text-red-500 block">Premium Entertainment</span> Only
        on ShivSubStar.
      </h1>
      <p className="text-sm font-serif mt-6 leading-relaxed">
        ShivSubStar is your ultimate destination for nonstop entertainment,
        featuring the latest movies, trending web series, and exclusive
        originals. Whether you love action, drama, comedy, or spirituality,
        there's something for every mood and moment. Experience high-quality
        streaming anytime, anywhere—only on ShivSubStar.
      </p>

      <div className="mt-6">
        <a href="#" className="bg-red-500 rounded-full px-6 py-2 inline-block text-white">
          Know More
        </a>
      </div>
      <div className="flex-1 md:hidden">
      <img
        src="A1.png"
        alt="About"
        className="w-full  mx-auto mt-10 lg:mt-0"
      />
    </div>

      <div className="flex gap-6 items-center  mt-10 flex-wrap">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXXjHW-cp474yJgvUOcrKVFmQW4Fbm-7tIQ&s"
          alt="about"
          className="w-16 h-16 md:w-35 md:h-20 rounded-full object-cover"
        />
        <a
          href="/Home"
          className="flex items-center font-serif gap-3 text-white  transition"
        >
          <div className="w-16 h-16 md:w-35 md:h-20 rounded-full border border-red-500 flex items-center justify-center">
            <BsFillCaretRightFill className="md:w-15 md:h-10 w-6 h-6" />
          </div>
          Watch Movies
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1">
      <img
        src="A1.png"
        alt="About"
        className="w-full hidden md:block mx-auto mt-10 lg:mt-0"
      />
    </div>
  </div>
</div>

  </>
  );
};

export default About;
