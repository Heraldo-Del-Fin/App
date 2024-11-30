//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import News from "./Screens/News";
import Contact from "./Screens/Contact";
import Banner from "./Screens/Banner";
import Register from "./Screens/Register";
import Bannerimg1 from "./assets/Banner.jpg";

<link rel="preconnect" href="https://fonts.googleapis.com" />;

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className={styles.content}>
                <Home />
                <Banner img={Bannerimg1} />
                <News />
                <Banner img={Bannerimg1} />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div>
                <Banner img={Bannerimg1} />
                <Register />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        {/* Banner puede mantenerse en Home o ser específico según la ruta */}
      </Router>
    </div>
  );
}

export default App;
