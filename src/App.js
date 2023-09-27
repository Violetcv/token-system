import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// components import
import Header from './components/Header.js';
import Footer from './components/Footer.js';

// pages import
import Home from './pages/Home.js';
import About from './pages/About.js';
import BookTickets from './pages/BookTickets.js'
import Cart from './pages/Cart.js';
// import Cart from './pages/Cart.js';
import ContactUs from './pages/ContactUs.js';
import TrackTicket from './pages/TrackTicket.js';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route 
              path="/"
              element={
                <>
                <Home />
                </>
              }
            />
            <Route 
              path="/about" 
              element={
                <>
                <About />
                </>
              } 
              />
              <Route 
              path="/booktickets" 
              element={
                <>
                <BookTickets />
                </>
              } 
            />
            <Route 
              path="/cart" 
              element={
                <>
                <Cart />
                </>
              } 
            />
            <Route 
              path="/contactus" 
              element={
                <>
                <ContactUs />
                </>
              } 
            />
            <Route 
              path="/trackticket" 
              element={
                <>
                <TrackTicket />
                </>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;