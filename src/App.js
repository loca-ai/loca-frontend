import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SecureRoute from './secureroute';
import Browse from './pages/browse';
import Explore from './pages/explore';
import Learn from './pages/learn';
import Favorites from './pages/favorites';
import Profile from './pages/profile';
import Login from './auth/login';
import Signup from './auth/signup';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<><SecureRoute element={Browse}/></>} exact={true} />
            <Route path="/browse" element={<><SecureRoute element={Browse}/></>}/>
            <Route path="/explore" element={<><SecureRoute element={Explore}/></>}/>
            <Route path="/learn" element={<><SecureRoute element={Learn}/></>}/>
            <Route path="/favorites" element={<><SecureRoute element={Favorites}/></>}/>
            <Route path="/profile" element={<><SecureRoute element={Profile}/></>} />
            
            <Route path="/login" element={<><Login/></>} />
            <Route path="/signup" element={<><Signup/></>} />
            
            <Route path="*" element={<Navigate to="/login" replace />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
