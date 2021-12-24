import React from "react";
import Header from "./header";
import Footer from "./footer";
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
          src="../posts/gatsby/messi.jpeg"
          alt="A dinosaur"
          placeholder="blurred"
          layout="fixed"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Layout;
