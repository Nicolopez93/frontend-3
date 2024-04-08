import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
          <Route path="/home" component={Home} />
          <Route path="/contacto" component={Contact} />
          <Route path="/favs" component={Favs} />
          <Route path="/dentist/:id" component={Detail} />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
