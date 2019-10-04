import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import api from "../../services/api";

import { token } from "../../utils/utils";

import { Container } from "./styles";

export default function Outline() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [avatar, setAvatar] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const response = await api.get("userId", {
        headers: token()
      });
      const { name } = response.data;
      const { username } = response.data;
      const { bio } = response.data;
      const { followers } = response.data;
      const { following } = response.data;
      const { avatar } = response.data;

      setName(name);
      setUserName(username);
      setBio(bio);
      setFollowers(followers);
      setFollowing(following);
      setAvatar(avatar);

      console.log(followers)
    }
    loadUser();
  }, []);
  return (
    <Container info>
      <div className="avatar">
        <img
          style={{
            width: "100%",
            height: 175,
            marginBottom: 15
          }}
          alt="avatar"
          src={avatar}
        />
      </div>
      <section>
        <div className="infoP">
          <h3>{username}</h3>
        </div>
        <ul>
          <li onClick={() => setShow(true)}>
            <strong>{followers.length}</strong> Followers
          </li>
          <li>
            <strong>{following.length}</strong> Following
          </li>
        </ul>
        <div className="infoB">
          <h3>{name}</h3>
          <span>{bio}</span>
        </div>
      </section>

      <Modal
        size="sd"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Followers
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {followers.name}
        </Modal.Body>
      </Modal>
    </Container>
  );
}
