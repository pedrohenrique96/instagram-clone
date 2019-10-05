import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import api from "../../services/api";

import { token } from "../../utils/utils";

import { Container, Box } from "./styles";

export default function Outline() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [show, setShow] = useState(false);
  const [foll, setFoll] = useState(false);

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
    }
    loadUser();
  }, []);

  function showFollowers() {
    setShow(true);
  }

  function showFollowing() {
    setShow(true);
    setFoll(true);
  }
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
          <li onClick={() => showFollowers()}>
            <strong>{followers.length}</strong> Followers
          </li>
          <li onClick={() => showFollowing()}>
            <strong>{following.length}</strong> Following
          </li>
        </ul>
        <div className="infoB">
          <h3>{name}</h3>
          <span>{bio}</span>
        </div>
      </section>

      <Modal
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        centered
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title  id="example-custom-modal-styling-title">
            {foll ? 'Following' : 'Followers'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Box>
            {foll ? (
              <>
                {following.map(f => (
                  <div id="modal">
                    <img src={f.avatar} alt="" />
                    <div id="user">
                      <div id="username">{f.username}</div>
                      <div id="name">{f.name}</div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {followers.map(f => (
                  <div id="modal">
                    <img style={{ height: 50 }} src={f.avatar} alt="" />
                    <div id="user">
                      <div id="username">{f.username}</div>
                      <div id="name">{f.name}</div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </Box>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
