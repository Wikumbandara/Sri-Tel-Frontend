import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import MainLayout from './layouts/MainLayouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './views/public/Home';
import Services from "./views/customer/Services";
import Packages from "./views/customer/Packages";
import Bills from './views/customer/Bills';
import SideBar from './components/SideBar/SideBar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
        <Route path="*" element={<MainLayout page={<Home />} />} />
        <Route exact path="/login" element={<MainLayout public={true} page={<Login />} />} />
        <Route exact path="/register" element={<MainLayout public={true} page={<Register />} />} />
        {/* <Route exact path="/services" element={ <MainLayout page={<Services />} />} /> */}
        <Route exact path="/packages" element={ <MainLayout page={<Packages />} />} />
        <Route exact path="/bills" element={ <MainLayout page={<Bills />} />} />
        

        </Routes>
      </Router>
    </>
  );
}

export default App;
