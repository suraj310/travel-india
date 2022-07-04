
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Home from './components/Home';
import About from './components/About';
import Article from './components/Article';
import Destinations from './components/destinations/Destinations';

import Selects from './components/selects/Selects';
import SelectsImg from './components/SelectsImg/SelectsImg';
import Footer from './components/footer/Footer';





import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Carousel></Carousel>
       <Destinations></Destinations>
        <Selects></Selects>
        <SelectsImg></SelectsImg>
        <Footer></Footer>
        
        
          {/* <Article name1="Raj" img="https://source.unsplash.com/640x480/?Tirupati " intro="my name is khan" />  
          <Article name2="suraj" img="https://source.unsplash.com/640x480/?sports" intro="this is suraj" />  
          <Article name3="suraj" img="https://source.unsplash.com/640x480/?nature" intro="this is mani" />  */}
        
       


        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="About" element={<About />} />               
           {/* <Route path="invoices" element={<Invoices />} />   these are for  render what page is clicked by user and renser only  
             those page only which is property of react*/}
        </Routes>
  
       
      
    </div>
    
  );
}

export default App;
