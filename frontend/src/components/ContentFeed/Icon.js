import React from "react";
import { Link } from "react-router-dom";

import AddPhotoAlternateRoundedIcon from "@material-ui/icons/AddPhotoAlternateRounded";

import { Div } from "./styles";

export default function Icon() {
  return (
    <Div>
      <Link className="link" to="/publication">
        <AddPhotoAlternateRoundedIcon className="icon" />
      </Link>
    </Div>
  );
}
