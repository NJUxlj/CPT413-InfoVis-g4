import React from "react";
// import HeaderCustom from "./components/HeaderCustom";
import Sider from "./components/SiderCustom";
// import Footer from "./components/FooterCustom";
import { Layout, BackTop } from "antd";
import Router from "../router";
// import BreadcrumbCustom from "./components/BreadcrumbCustom";
import "../style/Layout.less";

const { Header, Content } = Layout;

const TheLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <BackTop />
      <Layout className="site-layout">
        <Content
          style={{
            margin: "2px 16px",
            padding: 12,
            minHeight: 280,
          }}
        >
          <Router />
        </Content>
      </Layout>
    </Layout>
  );
};

export default TheLayout;
