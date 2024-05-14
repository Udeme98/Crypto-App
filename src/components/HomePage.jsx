import { millify } from "millify";
import { Link } from "react-router-dom";
import { Typography, Row, Col, Statistic } from "antd";

import { useGetCryptosQuery } from "../services/cryptoAPI";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  console.log(data);

  // const globalStats = data?.data?.stats;

  // if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={6} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={2} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={3} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={4} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market" value={5} />
        </Col>
      </Row>
    </>
  );
};
export default HomePage;
