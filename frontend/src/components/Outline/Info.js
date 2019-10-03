import React from "react";

import { Container } from "./styles";

export default function Outline() {
  return (
    <Container info>
      <div className="avatar">
        <img
          style={{ borderRadius: "100%", height: 135 }}
          alt=""
          src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-13.png"
        />
      </div>
      <section>
      <div className="infoP">
        <h3>pedrook16</h3>
        <button>Profile edit</button>
      </div>
      <ul>
        <li>15 publicações</li>
        <li>382 seguidores</li>
        <li>155 seguindo</li>
      </ul>
      <div className="infoB">
        <h3>Pedro Henrique</h3>
        <span>Desenvolvedor na CodeBy</span>
      </div>
      </section>
    </Container>
  );
}
