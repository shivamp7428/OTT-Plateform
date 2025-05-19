import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const defaultImage = "https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/v2/feature/profile/38_jv.png";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState(defaultImage);

  // Username fetch
  useEffect(() => {
    const checkAuthAndSetUsername = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:8000/api/v1/UserRoute/Auth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 200) {
          const decoded = jwtDecode(token);
          setUsername(decoded.username);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      }
    };

    checkAuthAndSetUsername();
  }, []);

  // Fetch saved image on mount
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/form/latest");
        if (res.data.imageUrl) {
          setImageUrl(res.data.imageUrl);
        }
      } catch (err) {
        toast.error("Image not loaded");
      }
    };
    fetchImage();
  }, []);

  // ✅ Image upload handler
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:8000/api/v1/form/upload", formData);
      if (res.data.imageUrl) {
        setImageUrl(res.data.imageUrl);
        toast.success("Image uploaded successfully");
      }
    } catch (err) { 
      toast.error("Image upload failed");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-black'>
      <div className="w-48 h-48 rounded-full border-4 border-white relative ">
        <img
          src={imageUrl}
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
      <h1 className="mt-2 ml-4 text-white text-xl">{username}</h1>
    </div>
  );
};

export default Profile;
