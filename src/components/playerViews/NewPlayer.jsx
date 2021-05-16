import React from "react";
import { useHistory } from "react-router-dom";

import * as PlayerDataService from "../../services/player.service";

function NewPlayer() {
  const [name, setName] = React.useState("");
  const [nickname, setNickname] = React.useState("");

  const history = useHistory();

  function handleName(event) {
    setName(event.target.value);
  }

  function handleNickname(event) {
    setNickname(event.target.value);
  }

  function handleCreatePlayer(event) {
    event.preventDefault();

    const playerJSON = {
      name: name,
      nickname: nickname,
      wins: 0,
      draws: 0,
      loses: 0
    };

    PlayerDataService.create(playerJSON)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    history.push("/");
  }

  return (
    <div className=".container">
      <form onSubmit={handleCreatePlayer}>
        <div className="card text-center">
          <div className="card-header">
            <a type="button" className="close" aria-label="Close" href="/">
              <span aria-hidden="true">×</span>
            </a>
            <h5>Neuen Spieler anlegen</h5>
          </div>
          <div className="card-body">
            <div className="card-title">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={handleName}
              ></input>
              <input
                type="text"
                className="form-control"
                placeholder="Nickname"
                onChange={handleNickname}
              ></input>
            </div>
            <input
              type="submit"
              className="btn btn-primary btn-dark"
              value="Spieler anlegen"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewPlayer;
