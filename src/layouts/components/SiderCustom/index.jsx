import React, { useState, useEffect } from "react";
import { NavLink as Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import {
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    label,
    key,
    icon,
    children,
    type,
  };
}

const items = [
  getItem(<Link to="/">图表</Link>, "/", <SettingOutlined />),
];

const SiderCustom = (props) => {
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState(["/"]);

  let pathname = useLocation().pathname;

  useEffect(() => {
    setSelectedKeys([pathname]);
  }, [pathname]);

  const subMenuOpenChange = (openItems) => {
    const curOpenKey = openItems[openItems.length - 1];
    if (!curOpenKey || curOpenKey.includes(openItems[0])) {
      setOpenKeys(openItems);
    } else {
      setOpenKeys([curOpenKey]);
    }
  };

  const menuItemClick = ({ key, keyPath }) => {
    setSelectedKeys([pathname]);
    if (keyPath.length === 1) setOpenKeys([]);
  };

  let { collapsed } = props;
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        items={items}
        onClick={menuItemClick}
        openKeys={openKeys}
        onOpenChange={subMenuOpenChange}
      />
    </Sider>
  );
};

export default connect(
  (state) => ({
    collapsed: state.collapsed,
  }),
  {}
)(SiderCustom);
