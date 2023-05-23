import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        style={{ height: 55, padding: "0px 20px" }}
      >
        <Link to="/" className="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
            width={30}
            height={30}
            className="d-inline-block align-top"
            alt="Synchronised Timeline Logo"
          />
          <span className="font-weight-bold ml-2">Synchronised Timeline</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <form className="form-inline">
            <div className="search-container">
              <input
                id="nav-searchbar"
                type="text"
                placeholder="Search..."
              />
              <button
                type="submit"
                style={{ borderRadius: "50%", padding: "7px 12px" }}
              >
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                <i className="fas fa-user-friends fa-lg" />
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                <i className="fab fa-facebook-messenger fa-lg" />
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                <i className="fas fa-bell fa-lg" />
              </a>
            </li>
            <li className="nav-item mx-2">
              <div className="dropdown">
                <a
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://remote-tools-images.s3.amazonaws.com/best+discord+pfp/blog+12/anime/anime/1+(1).jpg"
                    className="rounded-circle"
                    alt="Profile image"
                    width={30}
                    height={30}
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link to="/profile" className="dropdown-item">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="dropdown-item">
                      Settings &amp; Privacy
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Help &amp; Support
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Display Accessibility
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Log out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};



