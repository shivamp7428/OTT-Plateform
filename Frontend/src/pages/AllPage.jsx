
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidewar from '../component/Sidewar';
import Categories from './Categories';
import Footer from '../component/Footer';
import MySpace from './MySpace';
import Home from './Home';
import Search from './Search';
import Hindi from './Hindi';
import Malyalam from './Malyalam';
import Hollywood from './Hollywood';
import Tamil from './Tamil';
import Telagu from './Telagu';
import Profile from './Profile';

const AllPage = () => {


  return (
    <Router>
      <Sidewar />
      <div className="pl-25 bg-black  text-white">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tv" element={<div>📺 TV Page</div>} />
          <Route path="/movies" element={<div>🎬 Movies Page</div>} />
          <Route path="/sports" element={<div>🏃 Sports Page</div>} />
          <Route path="/sparks" element={<div>⚡ Sparks Page</div>} />
          <Route path="/" element={<Categories />} />
          <Route path="/myspace" element={<MySpace />} />
           <Route path="/Hindi" element={<Hindi/>} />
           <Route path="/Malyalam" element={<Malyalam/>} />
           <Route path="/Hollywood" element={<Hollywood/>} />
           <Route path="/Tamil" element={<Tamil/>} />
           <Route path="/Telagu" element={<Telagu/>} />
           <Route path="/myspace/profile" element={<Profile/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AllPage;
