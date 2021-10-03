import React from "react";

import Header from "./header";
import Footer from "./footer";
import "../styles/index.scss";
import * as layoutStyles from "./layout.module.scss";
import mainImage from "../posts/gatsby/messi.jpeg";

const Layout = (props) => {
  return (
    <div>
      <div className={layoutStyles.main}>
        <div>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
      <div className={layoutStyles.aside}>
        <p>Yash</p>
      </div>
    </div>
  );
};

export default Layout;
