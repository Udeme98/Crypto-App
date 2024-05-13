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
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={1} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={2} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={3} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={2} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market" value={2} />
        </Col>
      </Row>
    </>
  );
};
export default HomePage;
