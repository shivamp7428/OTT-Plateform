import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './About'
import Career from './Career'
import Terms from './Terms'
import Privacy from './Privacy'
import Faq from './FAQ'
import HelpCentre from './Help'
import Feedback from './Feedback'
import Login from './Login'
import SignUp from './Sign'
import VerifyOtp from './VerifyOTP'

const AllPage2 = () => {
  return (
   <>
  <Router>
      
      <div className="md:pl-25 bg-black"> 
        <Routes>
          <Route path="/About" element={<About/>} />
          <Route path="/Career" element={<Career/>} />
          <Route path="/Terms" element={<Terms/>}/>
          <Route path="/Privacy" element={<Privacy/>}/>
          <Route path="/FAQ" element={<Faq/>} />
          <Route path="/Help"  element={<HelpCentre/>} />
          <Route path="/Feedback" element={<Feedback/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Sign" element={<SignUp/>} />
           <Route path="/verify-otp" element={<VerifyOtp/>} />
       </Routes>
      </div>
    </Router>
   </>
  )
}

export default AllPage2
