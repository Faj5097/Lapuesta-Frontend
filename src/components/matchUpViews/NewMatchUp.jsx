import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import { MatchUpListContext } from "../context/MatchUpListContext";
// import defaultMatchUp from "../../defaultMatchUp";

function NewMatchUp() {
  // var today = new Date();
  // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // var dateTime = date+' '+time;

  const [state, dispatch] = useContext(MatchUpListContext);

  const [homeTeamPlayerName, setHomeTeamPlayerName] = useState("");
  const [homeTeamClubName, setHomeTeamClubName] = useState("");
  const [homeTeamClubStars, setHomeTeamClubStars] = useState("");
  const [awayTeamPlayerName, setAwayTeamPlayerName] = useState("");
  const [awayTeamClubName, setAwayTeamClubName] = useState("");
  const [awayTeamClubStars, setAwayTeamClubStars] = useState("");

  const history = useHistory();

  function handleHomeTeamClubNameChange(event) {
    setHomeTeamClubName(event.target.value);
  }
  function handleHomeTeamClubStarsChange(event) {
    setHomeTeamClubStars(event.target.value);
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
          player2: 0,
        },
        winner: [""],
        looser: [""],
        draw: false,
      },
      probability: {
        player1Wins: 1.4,
        draw: 4.5,
        player2Wins: 2.9,
      },
      teams: {
        home: {
          club: {
            name: homeTeamClubName,
            stars: homeTeamClubStars,
          },
          player1: {
            name: homeTeamPlayerName,
            winsBefore: 9,
            drawsBefore: 5,
            losesBefore: 1,
            goals: {
              scored: {
                allTime: 60,
                thisMatchUp: 0,
              },
              conceded: {
                allTime: 34,
                thisMatchUp: 0,
              },
            },
          },
        },
        away: {
          club: {
            name: awayTeamClubName,
            stars: awayTeamClubStars,
          },
          player2: {
            name: awayTeamPlayerName,
            winsBefore: 4,
            drawsBefore: 10,
            losesBefore: 8,
            goals: {
              scored: {
                allTime: 55,
                thisMatchUp: 0,
              },
              conceded: {
                allTime: 88,
                thisMatchUp: 0,
              },
            },
          },
        },
      },
    };

    dispatch({
      type: "ADD_MATCHUP",
      payload: { id: _.uniqueId(10), matchUpJSON },
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
              >
                <option value="" selected="true" disabled hidden>
                  Name
                </option>
                <option value="Domain">Domain</option>
                <option value="Listl">Fränzl</option>
                <option value="Jänki">Jänki</option>
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handleHomeTeamClubNameChange}
              >
                <option value="" selected="true" disabled hidden>
                  Team
                </option>
                <option value="FC Bayern">FC Bayern</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Frankfurt">Frankfurt</option>
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handleHomeTeamClubStarsChange}
              >
                <option value="" selected="true" disabled hidden>
                  Sterne
                </option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
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
                <option value="Domain">Domain</option>
                <option value="Listl">Fränzl</option>
                <option value="Jänki">Jänki</option>
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handleAwayTeamClubNameChange}
              >
                <option value="" selected="true" disabled hidden>
                  Team
                </option>
                <option value="FC Bayern">FC Bayern</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Frankfurt">Frankfurt</option>
              </select>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                onChange={handleAwayTeamClubStarsChange}
              >
                <option value="" selected="true" disabled hidden>
                  Sterne
                </option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
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
