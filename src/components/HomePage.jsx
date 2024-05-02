import { millify } from "millify";
import { Link } from "react-router-dom";
import { Typography, Row, Col, Statistic } from "antd";

const { Title } = Typography;

const HomePage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
    </>
  );
};
export default HomePage;
