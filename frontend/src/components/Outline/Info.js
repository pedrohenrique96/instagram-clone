import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { getToken } from "../../services/auth";

import { Container } from "./styles";

export default function Outline() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    async function loadUser() {
      const response = await api.get("userId", {
        headers: { Authorization: `Bearer ${getToken()}` }
      });
      const { name } = response.data;
      const { email } = response.data;
      const { username } = response.data;
      const { bio } = response.data;
      const { followers } = response.data;
      const { following } = response.data;
      const { avatar } = response.data;

      setName(name);
      setEmail(email);
      setUserName(username);
      setBio(bio);
      setFollowers(followers);
      setFollowing(following);
      setAvatar(avatar);
    }
    loadUser();
  }, []);
  return (
    <Container info>
      <div className="avatar">
        <img
          style={{
            width: '100%',
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
          <button>Profile edit</button>
        </div>
        <ul>
          <li>{followers.length} seguidores</li>
          <li>{following.length} seguindo</li>
        </ul>
        <div className="infoB">
          <h3>{name}</h3>
          <span>{bio}</span>
        </div>
      </section>
    </Container>
  );
}
