// SignUp.jsx
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/api/v1/UserRoute/SendOTP', formData)
      toast.success('OTP sent successfully!')
      localStorage.setItem('tempUserData', JSON.stringify(formData)) 
      navigate('/verify-otp') // go to OTP verification page
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send OTP')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-black text-gray-300 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-600">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}
            required className="w-full px-4 py-2 border border-gray-800 rounded-md" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
            required className="w-full px-4 py-2 border border-gray-800 rounded-md" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
            required className="w-full px-4 py-2 border border-gray-800 rounded-md" />
          <button type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Send OTP</button>
        </form>
        <h1 className='text-gray-500 m-20 mt-5'>Have an account ?  <a href="/Login" className='text-blue-300 hover:text-blue-600 hover:underline'>log in</a></h1>
      </div>
    </div>
  )
}

export default SignUp
