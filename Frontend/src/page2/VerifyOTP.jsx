import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); // loading state
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = JSON.parse(localStorage.getItem('tempUserData'));
    if (tempData?.email) setEmail(tempData.email);
    else navigate('/signup'); 
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading
    try {
      const res = await axios.post('http://localhost:8000/api/v1/UserRoute/VerifyOTP', { email, otp: otp.trim() });

      if (res.data?.Success) {
        toast.success('OTP verified successfully!');
        localStorage.setItem('token', res.data.token);
        
        
        setTimeout(() => {
          navigate('/myspace');
        }, 1000);

      } else {
        throw new Error(res.data?.message || 'Verification failed');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || err.message || 'Something went wrong');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black text-gray-300 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl flex gap-15 font-bold mb-6 text-center text-gray-600">
          <p className='text-gray-500 text-sm'>
            <a href="/Sign" className='flex items-center gap-1'><GoArrowLeft /> Back</a>
          </p>
          Verify OTP
        </h2>
        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-800 rounded-md"
            disabled={loading} // disable input while loading
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            disabled={loading} // disable button while loading
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
