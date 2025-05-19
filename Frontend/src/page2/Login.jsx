import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { GoArrowLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/api/v1/UserRoute/Login', {
        email,
        password,
      })

      toast.success('Login successful!')
      localStorage.setItem('token', res.data.token)
      navigate("/myspace")
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="backdrop-blur-lg p-8 text-white rounded-lg shadow-md w-full max-w-md ">
         <div className='flex items-center mb-6  gap-20'>
           <p className='text-gray-500 text-sm'>
              <a href="/myspace" className='flex items-center gap-1'><GoArrowLeft /> Back</a>
          </p>
        <h2 className="text-2xl font-bold  text-center text-gray-700">Login</h2>
         </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <h1 className="text-gray-500 mt-5 text-center">
          Don't have an account?{' '}
          <a href="/Sign" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </h1>
      </div>
    </div>
  )
}

export default Login
