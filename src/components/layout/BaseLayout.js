import { Layout, Menu } from "antd";
import React from "react";
import Link from "next/link";
import { ShoppingOutlined } from "@ant-design/icons";

const { Content, Footer, Sider } = Layout;
function LayoutBoss({ children, keys }) {
  const year = new Date().getFullYear();

  const itemsMenu = [
    {
      label: <Link href="/ticket">Ticket</Link>,
      key: "ticket",
      icon: <ShoppingOutlined />,
    },
  ];

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          defaultSelectedKeys={"ticket"}
          defaultOpenKeys={["ticket"]}
          selectedKeys={keys}
          mode="inline"
          style={{
            height: "100%",
          }}
          items={itemsMenu}
          // theme="dark"
        ></Menu>
      </Sider>
      <Layout className="site-layout">
        <Content>
          <div
            className="site-layout-background"
            style={{
              minHeight: 800,
              padding: "20px 20px",
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          BOSS ©{year} BAF
        </Footer>
      </Layout>
    </Layout>
  );
}
export default LayoutBoss;
