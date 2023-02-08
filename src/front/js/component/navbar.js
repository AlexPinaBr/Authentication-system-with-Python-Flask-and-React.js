import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div
          className="btn-toolbar"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          {store.userActive ? (
            <button
              type="button"
              className="btn btn-danger"
              onClick={async () => {
                if (await actions.logout()) {
                  navigate("/");
                }
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <div
                className="btn-group me-2"
                role="group"
                aria-label="First group"
              >
                <Link to="/login">
                  <button type="button" className="btn btn-primary">
                    Login
                  </button>
                </Link>
              </div>
              <div
                className="btn-group me-2"
                role="group"
                aria-label="Second group"
              >
                <Link to="/register">
                  <button type="button" className="btn btn-success">
                    Register
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
