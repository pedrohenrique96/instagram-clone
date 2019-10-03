import React from "react";

import { Container } from "./styles";

export default function Outline() {
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
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
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
