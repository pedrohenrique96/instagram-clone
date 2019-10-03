import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { Container, Img, Box } from "./styles";
import { nominalTypeHack } from "prop-types";

export default function Headers() {
  return (
    <Container>
      <Box className="container">
        <Link to="/feed">
          <Img
            alt=""
            src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-17.png"
          />
        </Link>
        <Link to="/">
          <ExitToAppIcon
            style={{
              fontSize: 30,
              float: "right",
              marginTop: 25,
              marginLeft: 10
            }}
          />
        </Link>
        <Link to="/profile/1">
          <PersonOutlineIcon
            style={{ fontSize: 30, float: "right", marginTop: 25 }}
          />
        </Link>
      </Box>
    </Container>
  );
}
