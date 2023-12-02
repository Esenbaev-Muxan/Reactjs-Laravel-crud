import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './Component/Header';
import Home from './Component/Home';

import Footer from './Component/Footer.js';
import Addproduct from './Component/Addproduct.js';
import Productlist from './Component/Productlist.js';
import EditProduct from './Component/EditProduct.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productlist' element={<Productlist />} />
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/editproduct/:id/edit' element={<EditProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
