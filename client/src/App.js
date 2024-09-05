import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import Home from "./components/layouts/Home";
import Navbar from "./components/layouts/Navbar.jsx";
import { loadUser } from "./actions/auth";
import store from "./store";
import "./App.css";
import setAuthToken from "./utils/setAuthToken";
import Routes from "./components/routing/Routes";
import Footer from "./components/layouts/Footer";

// framer motion
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const loc = useLocation();
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <AnimatePresence mode="wait">
      <React.Fragment>
        <Navbar />
        <Switch location={loc} key={loc.pathname}>
          <Route exact path="/">
            <motion.div exit={{ opacity: 0 }}>
              <Home />
            </motion.div>
          </Route>
          <Route component={Routes} />
        </Switch>
        <Footer />
      </React.Fragment>
    </AnimatePresence>
  );
};

export default App;
