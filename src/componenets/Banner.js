import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
// import "..../App.css"
import "../App.css";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="bannerContent">
        <div
          className="tagline"
          style={{ marginTop: "20px",alignContent: "center", alignItems: "center" }}
        >
          <Typography
            variant="h3"
            style={{fontWeight: "bold", marginBottom: 10 , color: "#0d4d4a99"}}
          >
            CoinHawk
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              fontSize: 20,
              color: "#0d4d4ad6",
              width: "75%",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* <span variant = "h3">
            Get all the Info regarding your favorite Crypto Currency.
            </span> */}
            A go-to platform for crypto enthusiasts. <br></br> CoinHawk is an
            all-in-one platform that offers comprehensive information and
            analysis on cryptocurrencies. It provides users with up-to-date
            market trends, trading volumes, and price fluctuations of major
            cryptocurrencies in real-time.
          </Typography>
        </div>
        <div
          className="homePageBtns"
          style={{ alignItems: "center", textAlign: "center" }}
        >
          <button
            className="homePageBtn1"
            style={{
              border: "1px solid #E8C589",
              // fontSize: "14px",
              padding: "0px 20px",
              color: "#E8C589",
              backgroundColor: "transparent",
              width: "224px",
              height: "48px",
              fontSize: "16px",
              borderWidth: "2px",
            }}
          >
            Login
          </button>

          <button
            className="homePageBtn2"
            style={{
              border: "1px solid #E8C589",
              // fontSize: "14px",
              padding: "0px 20px",
              color: "#333333",
              backgroundColor: "#E8C589",
              width: "224px",
              height: "48px",
              marginLeft: "20px",
              fontSize: "16px",
              borderWidth: "2px ",
            }}
          >
            Register
          </button>
        </div>
      </Container>
      <Carousel />
    </div>
  );
};

export default Banner;
