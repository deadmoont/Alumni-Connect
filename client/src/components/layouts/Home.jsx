import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { closeSideNav } from "../../actions/alert";

const Home = ({ closeSideNav, isAuth }) => {
  useEffect(() => {
    closeSideNav();
  }, []);
  if (isAuth) {
    return <Redirect to="/feed/topic/Placements?search=" />;
  }
  return (
    <section className="landing">
      <div className="hero">
        <div className="hero-inner">
          <h1 className="hero-head">AlumniConnect</h1>
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
