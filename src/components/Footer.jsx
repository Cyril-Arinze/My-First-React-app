import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> Created by <a href="https://twitter.com/CyrilArinze3">Cyril Arinze</a> | Copyright ⓒ {year} </p>
    </footer>
  );
}

export default Footer;
