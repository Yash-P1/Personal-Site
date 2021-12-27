import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import * as layoutStyles from "../components/layout.module.scss";

const Icons = () => {
  return (
    <div style={{ marginLeft: "17px" }}>
      <a
        className={layoutStyles.bottom}
        href="https://github.com/Yash-P1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className={layoutStyles.bottom}
        href="https://www.linkedin.com/in/yashpatel10/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className={layoutStyles.bottom}
        href="mailto:yashpatell@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail />
      </a>
      <a
        className={layoutStyles.bottom}
        href="https://www.instagram.com/ysp_7_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        className={layoutStyles.bottom}
        href="https://play.google.com/store/apps/details?id=com.NerdSure.ForceWars"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGooglePlaystore />
      </a>
    </div>
  );
};

export default Icons;
