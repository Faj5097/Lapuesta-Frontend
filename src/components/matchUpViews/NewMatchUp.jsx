import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as MatchUpDataService from "../../services/matchUp.service";
import * as PlayerDataService from "../../services/player.service";
import * as TeamDataService from "../../services/team.service";

function NewMatchUp() {
  const [homeTeamPlayerName, setHomeTeamPlayerName] = useState("");
  const [homeTeamClubName, setHomeTeamClubName] = useState("");
  const [homeTeamClubStars, setHomeTeamClubStars] = useState("");
  const [awayTeamPlayerName, setAwayTeamPlayerName] = useState("");
  const [awayTeamClubName, setAwayTeamClubName] = useState("");
  const [awayTeamClubStars, setAwayTeamClubStars] = useState("");

  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);

  const history = useHistory();

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

  function handleHomeTeamClubNameChange(event) {
    setHomeTeamClubName(event.target.value);
    teams
      .filter((team) => team.name === homeTeamClubName)
      .map((team) => setHomeTeamClubStars(team.stars));
  }
  function handleHomeTeamPlayerNameChange(event) {
    setHomeTeamPlayerName(event.target.value);
  }
  function handleAwayTeamClubNameChange(event) {
    setAwayTeamClubName(event.target.value);
  }
  function handleAwayTeamClubStarsChange(event) {
    setAwayTeamClubStars(event.target.value);
  }
  function handleAwayTeamPlayerNameChange(event) {
    setAwayTeamPlayerName(event.target.value);
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
        player1Wins: 1.4,
        draw: 4.5,
        player2Wins: 2.9
      },
      teams: {
        home: {
          club: {
            name: homeTeamClubName,
            stars: homeTeamClubStars
          },
          player1: {
            name: homeTeamPlayerName,
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
            name: awayTeamClubName,
            stars: awayTeamClubStars
          },
          player2: {
            name: awayTeamPlayerName,
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
                onChange={handleHomeTeamPlayerNameChange}
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
                onChange={handleHomeTeamClubNameChange}
              >
                <option value="" selected="true" disabled hidden>
                  Team
                </option>
                {teams.map((team) => (
                  <option value={team.name}>{team.name}</option>
                ))}
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
              >
                <option
                  value={
                    homeTeamClubName === ""
                      ? ""
                      : teams
                          .filter((team) => team.name === homeTeamClubName)
                          .map((team) => team.stars)
                  }
                  selected="true"
                  disabled
                >
                  {homeTeamClubName === ""
                    ? "Sterne"
                    : teams
                        .filter((team) => team.name === homeTeamClubName)
                        .map((team) => team.stars)}
                </option>
              </select>
              <h6>Player 2</h6>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handleAwayTeamPlayerNameChange}
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
                onChange={handleAwayTeamClubNameChange}
              >
                <option value="" selected="true" disabled hidden>
                  Team
                </option>
                {teams.map((team) => (
                  <option value={team.name}>{team.name}</option>
                ))}
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handleAwayTeamClubStarsChange}
              >
                <option
                  value={
                    awayTeamClubName === ""
                      ? ""
                      : teams
                          .filter((team) => team.name === awayTeamClubName)
                          .map((team) => team.stars)
                  }
                  selected="true"
                  disabled
                >
                  {awayTeamClubName === ""
                    ? "Sterne"
                    : teams
                        .filter((team) => team.name === awayTeamClubName)
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
