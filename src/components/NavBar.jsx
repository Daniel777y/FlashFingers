import React from "react"
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
					<Link className="navbar-brand" to="/">
						FlashFingers
					</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/index">
									Home
								</Link>
              </li>
              <li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/upload">
									Upload
								</Link>
              </li>
              <li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/history">
									History
								</Link>
              </li>
            </ul>
          </div>
        </div>
			</nav>
    );
  }
}
