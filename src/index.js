import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
