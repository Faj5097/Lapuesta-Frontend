import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as MatchUpDataService from "../../services/matchUp.service";
import * as PlayerDataService from "../../services/player.service";
import * as TeamDataService from "../../services/team.service";

function NewMatchUp() {
  const history = useHistory();

  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);

  const [player1Nickname, setPlayer1Nickname] = useState("");
  const [player1Country, setPlayer1Country] = useState("");
  const [player1TeamName, setPlayer1TeamName] = useState("");
  const [player1Stars, setPlayer1Stars] = useState("");

  const [player2Nickname, setPlayer2Nickname] = useState("");
  const [player2Country, setPlayer2Country] = useState("");
  const [player2TeamName, setPlayer2TeamName] = useState("");
  const [player2Stars, setPlayer2Stars] = useState("");

  function retrieveData() {
    retrievePlayers();
    retrieveTeams();
  }

  function retrieveTeams() {
    TeamDataService.getAll()
      .then((response) => {
        setTeams(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function retrievePlayers() {
    PlayerDataService.getAll()
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  React.useEffect(retrieveData, []);

  function handlePlayer1CountryChange(event) {
    const countryValue = event.target.value;
    const firstTeamOfCountry = teams.filter(
      (team) => team.country === countryValue
    )[0].name;
    const starsOfTeam = teams.filter(
      (team) => team.name === firstTeamOfCountry
    )[0].stars;
    setPlayer1Country(countryValue);
    setPlayer1TeamName("");
    setPlayer1Stars("");
    // setPlayer1TeamName(firstTeamOfCountry);
    // setPlayer1Stars(starsOfTeam);
  }

  function handlePlayer1TeamNameChange(event) {
    if (event.target.value !== "") {
      setPlayer1TeamName(event.target.value);
      teams
        .filter((team) => team.name === event.target.value)
        .map((team) => setPlayer1Stars(team.stars));
    }
  }
  function handlePlayer1NicknameChange(event) {
    setPlayer1Nickname(event.target.value);
  }

  function handlePlayer2CountryChange(event) {
    const countryValue = event.target.value;
    const firstTeamOfCountry = teams.filter(
      (team) => team.country === countryValue
    )[0].name;
    const starsOfTeam = teams.filter(
      (team) => team.name === firstTeamOfCountry
    )[0].stars;
    setPlayer2Country(countryValue);
    setPlayer2TeamName("");
    setPlayer2Stars("");
    // setPlayer1TeamName(firstTeamOfCountry);
    // setPlayer1Stars(starsOfTeam);
  }
  function handlePlayer2TeamNameChange(event) {
    setPlayer2TeamName(event.target.value);
  }
  function handlePlayer2NicknameChange(event) {
    setPlayer2Nickname(event.target.value);
    teams
      .filter((team) => team.name === player2TeamName)
      .map((team) => setPlayer2Stars(team.stars));
  }

  function handleCreateMatchUp(event) {
    event.preventDefault();

    const matchUpJSON = {
      dateTimeOfMatchUp: new Date(Date.now()),
      alreadyPlayed: false,
      result: {
        goals: {
          player1: 0,
          player2: 0
        },
        winner: "",
        looser: "",
        draw: false
      },
      probability: {
        player1Wins: 99.99,
        draw: 99.99,
        player2Wins: 99.99
      },
      teams: {
        home: {
          club: {
            name: player1TeamName,
            stars: player1Stars
          },
          player1: {
            name: player1Nickname,
            winsBefore: 9,
            drawsBefore: 5,
            losesBefore: 1,
            goals: {
              scored: {
                allTime: 60,
                thisMatchUp: 0
              },
              conceded: {
                allTime: 34,
                thisMatchUp: 0
              }
            }
          }
        },
        away: {
          club: {
            name: player2TeamName,
            stars: player2Stars
          },
          player2: {
            name: player2Nickname,
            winsBefore: 4,
            drawsBefore: 10,
            losesBefore: 8,
            goals: {
              scored: {
                allTime: 55,
                thisMatchUp: 0
              },
              conceded: {
                allTime: 88,
                thisMatchUp: 0
              }
            }
          }
        }
      }
    };

    MatchUpDataService.create(matchUpJSON)
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
      <form onSubmit={handleCreateMatchUp}>
        <div className="card text-center">
          <div className="card-header">
            <a type="button" className="close" aria-label="Close" href="/">
              <span aria-hidden="true">×</span>
            </a>
            <h5>Neues Spiel anlegen</h5>
          </div>
          <div className="card-body">
            <div className="card-title">
              <h6>Player 1</h6>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handlePlayer1NicknameChange}
                required
              >
                <option value="" selected="true" disabled hidden>
                  Name
                </option>
                {players.map((player) => (
                  <option value={player.nickname}>{player.nickname}</option>
                ))}
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handlePlayer1CountryChange}
              >
                <option value="" selected="true" disabled hidden>
                  Land
                </option>
                {[...new Set(teams.map((team) => team.country))].map(
                  (element) => {
                    return <option value={element}>{element}</option>;
                  }
                )}
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handlePlayer1TeamNameChange}
              >
                <option value="Team" selected="true" disabled hidden>
                  Team
                </option>
                {teams
                  .filter((team) => team.country === player1Country)
                  .map((team) => (
                    <option value={team.name}>{team.name}</option>
                  ))}
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
              >
                <option
                  value={
                    player1TeamName === ""
                      ? ""
                      : teams
                          .filter((team) => team.name === player1TeamName)
                          .map((team) => team.stars)
                  }
                  selected="true"
                  disabled
                >
                  {player1TeamName === ""
                    ? "Sterne"
                    : teams
                        .filter((team) => team.name === player1TeamName)
                        .map((team) => team.stars)}
                </option>
              </select>
              <h6>Player 2</h6>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handlePlayer2NicknameChange}
              >
                <option value="" selected="true" disabled hidden>
                  Name
                </option>
                {players.map((player) => (
                  <option value={player.nickname}>{player.nickname}</option>
                ))}
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handlePlayer2CountryChange}
              >
                <option value="" selected="true" disabled hidden>
                  Land
                </option>
                {[...new Set(teams.map((team) => team.country))].map(
                  (element) => {
                    return <option value={element}>{element}</option>;
                  }
                )}
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handlePlayer2TeamNameChange}
              >
                <option value="" selected="true" disabled hidden>
                  Team
                </option>
                {teams
                  .filter((team) => team.country === player2Country)
                  .map((team) => (
                    <option value={team.name}>{team.name}</option>
                  ))}
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
              >
                <option
                  value={
                    player2TeamName === ""
                      ? ""
                      : teams
                          .filter((team) => team.name === player2TeamName)
                          .map((team) => team.stars)
                  }
                  selected="true"
                  disabled
                >
                  {player2TeamName === ""
                    ? "Sterne"
                    : teams
                        .filter((team) => team.name === player2TeamName)
                        .map((team) => team.stars)}
                </option>
              </select>
            </div>
            <input
              type="submit"
              className="btn btn-primary btn-dark"
              value="Spiel anlegen"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewMatchUp;
