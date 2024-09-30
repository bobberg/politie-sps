import React from "react";

// fix this import
import { Link } from "react-router-dom";

// import "../App.css";
import PolitieLogo from "../assets/PolitieLogo";
import PolitieLogoBig from "../assets/PolitieLogoBig";

// Import your icons here
// import Info from "../assets/Info";
// import Notebook from "../assets/Notebook";

// import HomePage from "./pages/HomePage";

const Navbar = () => {
  // const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "#182866" }}>
        <div className="navbar-brand">
          <Link to="/">
            <PolitieLogo />
          </Link>
        </div>
        <div>
          {/* <Link to="/lettergrootte">
            <Info />
            <span>Lettergrootte</span>
          </Link>
          <Link to="/notebook">
            <Notebook />
            <span>Voorleesfunctie</span>
          </Link> */}

          {/* <nav className="navbar" style={{ backgroundColor: "#182866" }}>
            <PolitieLogo />
            <Routes>
              <Route path="/" element={<Home />}>
                
              </Route>
              <Route path="/lettergrootte" element={<Lettergrootte />} />
              <Route path="/notebook" element={<Notebook />} />
            </Routes>
          </nav> */}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
