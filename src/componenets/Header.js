import React from 'react';
import "../App.css";
import { useNavigate } from 'react-router-dom';
import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from "@mui/material";
// import makeStyles from '@mui/material';
// import {AppBar} from "@mui/material"

const Header = () => {

  // const useStyles = makeStyles((theme) => ({
  //   title: {
  //     flex: 1,
  //     color: "gold",
  //     fontFamily: "Montserrat",
  //     fontWeight: "bold",
  //     cursor: "pointer",
  //   },
  // }));

  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
  <AppBar color='transparent' position='static'>
    <Container>
      <Toolbar>
        <Typography onClick = {()=> navigate('/home')} className="title">Coin Hawk</Typography>
        <Select className='selectPair'>
          <MenuItem value = {"USD"}>USD</MenuItem>
          <MenuItem value = {"INR"}>INR</MenuItem>
          <MenuItem value = {"BTC"}>BTC</MenuItem>
        </Select>
      </Toolbar>
    </Container>
  </AppBar>
  </ThemeProvider>
  )
}

export default Header