
import './App.css'


// src/App.tsx
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage';
import Homepage from './Pages/Homepage';



function App() {

  const user=JSON.parse(localStorage.getItem("user"))
  
  return (
    
    
      
    <Router>
        <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={user?<Homepage />:<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;




