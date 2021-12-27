import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>
        I'm Yash, a Game developer and Indie Game designer based in Montreal.
      </h2>
      <p>
        Need a developer? Or have interesting idea to discuss?{" "}
        <Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
