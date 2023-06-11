import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { makeStyles } from "@mui/material";
import Header from "./componenets/Header";
import Navbar from "./componenets/Navbar";
import Homepage from "./pages/Homepage";
import Coinpage from "./pages/Coinpage";
import Marketpage from "./pages/Marketpage";
import NftsPage from "./pages/NftsPage";
function App() {

  return (
    <>
    <Navbar/>
      <BrowserRouter>
      {/* <div className="headerWrap"> */}
        {/* <Header /> */}
        <Routes >
          <Route path="/" element={<Homepage />}></Route>
           <Route path="/market" element={<Marketpage />}></Route>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/nfts" element={<NftsPage />}></Route> 
          <Route path="/coins/:id" element={<Coinpage />}></Route>
        </Routes>
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
