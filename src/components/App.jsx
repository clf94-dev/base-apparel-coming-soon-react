import React from "react";
import { Button, TextField, Grid } from "@material-ui/core/";

import Logo from "../images/logo.svg";
import ImageDesktop from "../images/hero-desktop.jpg";
import ImageMobile from "../images/hero-mobile.jpg";
import Arrow from "../images/icon-arrow.svg";

function App() {
  return (
    <div>
      <Grid container direction="row ">
        <Grid item md={6}>
          <Grid container className="text-col">
            <img src={Logo} alt="logo" />
          </Grid>
          <Grid container className="desktop-hidden">
            <img
              style={{ display: "none" }}
              src={ImageMobile}
              alt="hero-mobile"
            />
          </Grid>
          <Grid container className="text-col">
            <h1 className="title">We're</h1>
            <h2 className="coming-soon">coming soon</h2>
            <p>
              {" "}
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <Grid container direction="row">
              <Grid item md={9} xs={12}>
                <form validate="true">
                  <TextField
                    style={{
                      backgroundColor: "white",
                      border: "1px solid hsl(0, 93%, 68%)"
                    }}
                    required
                    //error
                    id="filled-basic"
                    label="email@example.com"
                    variant="outlined"
                    type="email"
                    className="email-input"
                    //helperText="Incorrect entry."
                  />
                </form>
              </Grid>

              <Grid item md={3} xs={12}>
                <Button variant="contained" className="arrow-btn">
                  <img src={Arrow} alt="arrow" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <img className="desktop-img" src={ImageDesktop} alt="hero-desktop" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
