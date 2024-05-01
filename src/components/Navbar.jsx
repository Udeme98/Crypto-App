import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import icon from "../assets/images/cryptocurrency.png";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}></Menu.Item>
      </Menu>
    </div>
  );
};
export default Navbar;
