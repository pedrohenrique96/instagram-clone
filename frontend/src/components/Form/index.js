import React, { useMemo, useState } from "react";
import PhotoCameraSharpIcon from "@material-ui/icons/PhotoCameraSharp";
import { Container } from "./styles";

import api from "../../services/api";
import { token } from "../../utils/utils";

export default function Form({ history }) {
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const preview = useMemo(() => {
    return photo ? URL.createObjectURL(photo) : null;
  }, [photo]);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();

    data.append("description", description);
    data.append("photo", photo);

    await api.post("/publication", data, {
      headers: token()
    });
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h3>Upload Photo</h3>
        <label
          id="photo"
          style={{ backgroundImage: `url(${preview})` }}
          className={photo ? "has-photo" : ""}
        >
          <input type="file" onChange={e => setPhoto(e.target.files[0])} />
          <PhotoCameraSharpIcon style={{ color: "#ddd" }} id="icon" />
        </label>
        <label id="desc">
          Description * <span>(Type 20 Characters)</span>
        </label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          cols="15"
          rows="5"
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </Container>
  );
}
