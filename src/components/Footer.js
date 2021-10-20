import React from "react";
import "../css/Footer.css";

import Logo from "./Logo";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <p className="col-10 col-md-11">Copyright</p>
          <div className="col-2 col-md-1">
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
