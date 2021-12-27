import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        As a software developer, I have 4+ years of experience in building
        innovative games and mobile/web applications. I have been an avid gamer
        since childhood, now exploring the technical side by creating
        interesting projects. Here you can find my university projects and some
        fun-projects I've been working on.
      </p>
      <p>
        Also, I'm recently graduated from Bishop's University studying MSc. in
        Computer Science.
      </p>
      <p>
        In my free time, you can find me playing FIFA. Hit me up if you're up
        fot it xD
      </p>
    </Layout>
  );
};

export default AboutPage;
