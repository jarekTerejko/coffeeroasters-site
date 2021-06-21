import { useState } from "react";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrolledNav, setScrolledNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 0) {
      setScrolledNav(true);
    } else {
      setScrolledNav(false);
    }
  };

  return (
    <>
      <Navbar
        scrolledNav={scrolledNav}
        changeNav={changeNav}
        handleMenu={handleMenu}
        isOpen={isOpen}
      />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about-us" exact>
          <AboutUs/>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
