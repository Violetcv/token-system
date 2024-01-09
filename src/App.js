import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MoralisProvider } from "react-moralis";

// components import
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

// pages import
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import BookTickets from "./pages/BookTickets.js";
import Cart from "./pages/Cart.js";
// import Cart from './pages/Cart.js';
import ContactUs from "./pages/ContactUs.js";
import TrackTicket from "./pages/TrackTicket.js";
import "./App.css";
import SignIn from "./pages/SignIn.js";

function App() {
  return (
    // <MoralisProvider
    //   // moralis api value
    //   appId={"7d9349c2-08ba-4957-b31b-09bf19b370a8"} // Replace with your Moralis app ID
    //   serverUrl="https://eu-central-1.moralis.io/Qy5tAktq0RZoMV9jwHzdxV9G2ryXE2u8jtFXnYbUj0W3QhsJlZe5bRVxKtvZEp1S/server" // Replace with your Moralis server URL
    // >
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
              <Route
                path="/signin"
                element={
                  <>
                    <SignIn />
                  </>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    // </MoralisProvider>
  );
}

export default App;
