import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import Catagori from './Component/Catagori1';
import Heading from './Component/Heading';
import NavBar from './Component/NavBar1';
import Products from './Component/Products';
import Chakli from './Actual_catagori/Chakli';
import Cookies from './Actual_catagori/Cookies';
import Ladoo from './Actual_catagori/Ladoo'
import Modak from './Actual_catagori/Modak';
import Namkeen from './Actual_catagori/Namkeen';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div>
    <NavBar/>
      <Routes >


          <Route exact path="/" element={<App/>}/>
          <Route exact path='/Catagori' element={<Catagori/>}/>
          <Route exact path='/Heading' element={<Heading/>}/>
          <Route exact path='/products' element={<Products/>}/>

          <Route exact path='/Chakli' element={<Chakli/>}/>
          <Route exact path='/Cookies' element={<Cookies/>}/>
          <Route exact path='/Ladoo' element={<Ladoo/>}/>
          <Route exact path='/Modak' element={<Modak/>}/>
          <Route exact path='/Namkeen' element={<Namkeen/>}/>
        

      </Routes>
    </div>
  </Router>
);
