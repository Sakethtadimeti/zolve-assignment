import React from "react";
import "./header-component.scss";

const HeaderComponent = () => {
  return (
    <header className="app-header">
      <nav className="app-navbar">
        <span className="app-name">Zolve</span>
        <a href="/">Language Graph</a>
        <a href="/copy-clipboard">CopyToClipboard</a>
      </nav>
    </header>
  );
};

export default HeaderComponent;
