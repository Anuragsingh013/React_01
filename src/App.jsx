import './App.css';
import * as React from 'react';
import Header from './Header';

import  Employees from './Employees';

import Footer from './Footer';


import Inc from './component/Incnum';



function App() {
  return (
    <div>
     
      <Header />
       < Employees/> 
     
      
      <Footer />
      
      <Inc/>
    </div>
  );
}
export default App;
