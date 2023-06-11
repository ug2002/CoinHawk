import React from "react";
// import image from ".../publi"
import nftBg from "../nftPage.jpg";
import "../App.css";
import { fontSize } from "@mui/system";

const NftsPage = () => {
  return (
    <div>
      {/* <div
        className="nftPageCss"
        style={{ color: "black", fontSize: "50px" }}
      >
        To Be Available Soon!
      </div> */}

      <div
        className="nftWrap"
        style={{
          // marginTop: "0x",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
          backgroundImage: `url(${nftBg})`,
        }}
      ></div>
    </div>
  );
};

export default NftsPage;
