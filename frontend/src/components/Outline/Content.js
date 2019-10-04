import React, { useEffect, useState } from "react";

import api from "../../services/api";
import { token } from "../../utils/utils";

import { Container } from "./styles";

export default function Outline() {
  const [publi, setPubli] = useState([]);

  useEffect(() => {
    async function loadPlubli() {
      const response = await api.get("/profile", {
        headers: token()
      });
      console.log(response.data);
    }
    loadPlubli();
  }, []);

  return (
    <Container content>
      <hr />
      <div style={{ margin: 0 }}>
        <article>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>          
        </article>
      </div>
    </Container>
  );
}
