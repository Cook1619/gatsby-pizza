import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <nav>
      <Nav />
      <p>{children}</p>
      <Footer />
    </nav>
  );
}
