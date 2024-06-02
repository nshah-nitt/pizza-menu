import React from "react";

function Footer() {
  const date = new Date().getHours();

  const isOpen = date >= 10 && date <= 22;
  console.log(date);

  return (
    <footer className="footer">
      <div className="order">
        {isOpen && <>We're Open. Visit Us or Order Online</>}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default Footer;
