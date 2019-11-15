import React from "react";
import { Layout, Menu } from "element-react/next";
import Image from "../../Assets/logo.jpg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className='NavBar'>
      <Layout.Row type="flex" justify="center">
        <Layout.Col span="23">
          <Menu  className="UpperNav">
            <Menu.Item index="1">
              <img style={{ width: "5rem" }} src={Image} alt="..." />
              <span>Logo</span>
            </Menu.Item>
          </Menu>
          <Menu theme="dark">
            <div className="Title">Football Application</div>
          </Menu>
        </Layout.Col>
      </Layout.Row>
    </div>
  );
};

export default NavBar;
