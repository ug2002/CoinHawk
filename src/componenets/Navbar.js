import { MenuItem, Select } from "@mui/material";
import React, { Component } from "react";
import "../App.css"
import { CryptoState } from "../CryptoContext";

const Navbar =()=>{
    // state = {  clicked:false};
    // handleClick =()=>{
    //     this.setState({clicked :! this.state.clicked})
    // }
    // render(){
      const { currency, setCurrency } = CryptoState();
  return (
    <>
      <nav>
        <img
          className="homePageLogo"
          src="/logoipsum-292.svg "
          alt="code-sync-logo"
        />
        <div>
          <ul id="navbar" /*className={this.state.clicked ? "#navbar active" : "#navbar" }*/>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/market">Market</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/nfts">NFTs</a>
            </li>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              className = "selectStyle"
              style={{ color: "black"}}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem style={{ color: "black"}} value={"USD"}>USD</MenuItem>
              <MenuItem style={{ color: "black"}} value={"INR"}>INR</MenuItem>
            </Select>

            <li>
              <i className="fas fa-user" style={{color: "black"}}></i>
            </li>
          </ul>
          
        </div>
        {/* <div id="mobile" onClick={this.handleClick}> 
        <i
        id="bar"
        className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
        ></i>


        </div> */}
        

      </nav>
    </>
  );
};
// }
export default Navbar;
