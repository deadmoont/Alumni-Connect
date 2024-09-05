import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeSideNav } from "../../actions/alert";
import { motion } from "framer-motion";

const Home = ({ closeSideNav, isAuth }) => {
  useEffect(() => {
    closeSideNav();
  }, []);
  if (isAuth) {
    return <Redirect to="/feed/topic/Placements?search=" />;
  }
  return (
    <section className="landing">
      {/* {console.log("react versionnnnn--" + React.version)} */}
      <div className="hero">
        <div className="hero-inner">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hero-head"
          >
            AlumniConnect
          </motion.h1>
          <p className="hero-text">
            Create a profile, share and interact <br />
            with your Alumni Network
          </p>
          <div className="auth-buttons">
            <Link
              to="/register"
              className="register"
              style={{ marginRight: "0.5em", scale: "1.2" }}
            >
              <span className="nav-lt">Register</span>
            </Link>
            <Link
              to="/login"
              style={{ marginLeft: "0.5em", scale: "1.2" }}
              className="login"
            >
              <span className="nav-lt">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  isAuth: PropTypes.bool,
  closeSideNav: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { closeSideNav })(Home);
