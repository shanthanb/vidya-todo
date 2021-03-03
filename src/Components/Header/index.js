import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";

import "./header.css";

const Header = () => {
	return (
		<Fragment>
			<header>
				<div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo-container">Logo</div>
            <div className="menu d-flex align-items-center">
              <a href="" className="mr-4">
                Home
              </a>
              <a href="" className="mr-4">
                My Portfolio
              </a>
              <a href="" className="mr-4">
                Clients
              </a>
              <Button>Get in Touch</Button>
            </div>
          </div>
				</div>
			</header>
		</Fragment>
	);
};

export default Header;
