import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me</h1>
      <p>The best way to reach me is via email or Phone:</p>
      <div>
        <a
          href="mailto:yashpatell@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          yashpatell@outlook.com
        </a>
        <p>+1 819-919-4155</p>
      </div>
    </Layout>
  );
};

export default ContactPage;
