import React, { useEffect, useState } from 'react';
import AllPage from './pages/AllPage';
import AllPage2 from './page2/AllPage2';
import { ToastContainer } from 'react-toastify';
const App = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Simulate initial loading
    const loadTimeout = setTimeout(() => setIsLoading(false), 1000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearTimeout(loadTimeout);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-center flex-col">
        <img src="user.png" alt="No Internet" className="w-28 h-28 mb-4 animate-pulse" />
        <p className="text-lg font-semibold">No Internet Connection</p>
        <p className="text-sm text-gray-400">Please check your connection and try again.</p>
      </div>
    );
  }

if (isLoading) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-16 h-16 rounded-full border-4 animate-spin"
        style={{
          borderTop: '4px solid #3b82f6',     
          borderRight: '4px solid #000000',   
          borderBottom: '4px solid #9ca3af',  
          borderLeft: '4px solid transparent', 
        }}
      ></div>
    </div>
  );
}
  return (
  <>
   <AllPage2/>
   <AllPage/>
     <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" 
      />
  </>
  );
};

export default App;
