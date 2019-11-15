import React from "react";
import { Menu } from "element-react/next";
import "./Footer.css";

const Footer = props => {
  return (
    <>
      <div className="Footer">
        <Menu theme="dark" className="el-menu-demo" mode="horizontal">
          <p>
            Copyright &copy; 2019 | Designed by <span> Aya ElNahas</span>
          </p>
        </Menu>
      </div>
    </>
  );
};

export default Footer;
