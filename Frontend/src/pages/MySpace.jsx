import { FaAngleRight } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { MdCheck } from "react-icons/md";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai";
import {jwtDecode} from "jwt-decode";
const MySpace = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

useEffect(() => {
  const checkAuthAndSetUsername = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    try {
      const res = await axios.get("http://localhost:8000/api/v1/UserRoute/Auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setIsLoggedIn(true);
        const decoded = jwtDecode(token);
        console.log(decoded)
        setUsername(decoded.username);
       console.log(decoded.username)
        const showToast = localStorage.getItem("showLoginSuccessToast");
        if (showToast === "true") {
          toast.success("Login successful!");
          localStorage.removeItem("showLoginSuccessToast");
        }
      }
    } catch (err) {
      setIsLoggedIn(false);
      console.error("Auth check failed:", err);
    }
  };

  checkAuthAndSetUsername();
}, []);
 
  return (
    <div className="min-h-screen bg-black text-white">
      {!isLoggedIn ? (
        // 🔓 Not Logged In
        <div className="flex justify-center items-center px-4">
          <div className="text-center">
            <img src="login.png" alt="login" className="h-80 mx-auto mb-6" />
            <h1 className="font-bold text-3xl mb-3">Login to ShivSub</h1>
            <p className="mb-6 text-gray-400">
              Start watching from where you left off, personalise for kids and more.
            </p>
            <a
              href="/login"
              className="inline-block bg-gradient-to-r from-blue-500 to-gray-500 py-3 px-6 rounded-md font-semibold text-xl"
            >
              Log In
            </a>
          </div>
        </div>
      ) : (
        
        // ✅ Logged In: User Content
       <div className="mx-16 min-h-screen mb-20 pt-20  px-10">
          <div className="flex justify-between items-center">
            <a href="#">
              <h1 className="flex gap-2 items-center font-bold text-2xl">
                Subscribe to enjoy ShivSubStar <FaAngleRight className="mt-1" />
              </h1>
            </a>
            <div className="flex gap-5">
              <a href="#" className="bg-gradient-to-r from-blue-500 to-gray-500 p-3 font-bold rounded text-xl inline-flex justify-center items-center">
                Subscribe
              </a>
              <a href="#" className="bg-gradient-to-r from-blue-500 to-gray-500 p-3 font-bold rounded text-xl inline-flex items-center gap-1">
                <IoSettingsOutline /> Help & Setting
              </a>
            </div>
          </div>

          <hr className="my-20 border-gray-900" />

          <div>
            <h1 className="text-2xl font-bold">Profiles</h1>
            <div className="flex gap-10 mt-4 ">
              <div className="relative w-25 h-25  rounded-full  border-4 border-white">
                <a href="/myspace/profile">
                  <img
                    src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v2/feature/profile/38_jv.png" alt="profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <MdCheck className="absolute bottom-1 right-0   text-black  bg-white rounded-full   text-3xl border border-gray-200" />
                </a>
                <h1 className="mt-2 text-center text-white">{username}</h1>
              </div>

              <div className="relative  w-25 h-25  rounded-full  border-4 border-white">
                <img
                  src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/feature/profile/19_rebranded.png"
                  alt="profile"
                  className="w-full cursor-grab h-full object-cover rounded-full"
                />
                <h1 className="mt-2 text-center">Kids</h1>
              </div>
               <div className="relative w-25 h-25  rounded-full  border-4 border-white">
                <a href="#">
                  <AiOutlinePlus className="w-full h-full p-7"/>
                </a>
                <h1 className="mt-2 text-center">Add</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySpace;
