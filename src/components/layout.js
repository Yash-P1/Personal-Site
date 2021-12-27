import React from "react";
import Header from "./header";
import Icons from "../pages/icons";
import "../styles/index.scss";
import * as layoutStyles from "./layout.module.scss";
//import mainImage from "../posts/gatsby/messi.jpeg";
import { StaticImage } from "gatsby-plugin-image";

const Layout = (props) => {
  return (
    <div>
      <div className={layoutStyles.main}>
        <div>
          <Header />
          {props.children}
        </div>
      </div>
      <div className={layoutStyles.aside}>
        <StaticImage
          src="../posts/gatsby/Yash.png"
          alt="Snow picture"
          placeholder="blurred"
          width={250}
          height={250}
        />
        <Icons />
      </div>
    </div>
  );
};

export default Layout;
