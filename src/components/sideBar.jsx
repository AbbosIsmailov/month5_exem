import React from "react";
import logo from "../assets/images/logo.png";
import moon from "../assets/images/icon-moon.svg";
import avatar from "../assets/images/image-avatar.jpg";

function SideBar() {
  return (
    <section className="sidebar">
      <div className="box">
        <div className="card-top">
          <img className="sidebar__logo" src={logo} alt="logo" />
          <img className="night-light" src={moon} alt="kun-tun" />
        </div>
        <div className="card-bottom">
          <img className="avatar" src={avatar} alt="avatar" />
        </div>
      </div>
    </section>
  );
}

export default SideBar;
