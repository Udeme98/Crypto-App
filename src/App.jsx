import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  HomePage,
  News,
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
} from "./components";
import { Layout, Typography, Space } from "antd";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </div>
  );
};
export default App;
