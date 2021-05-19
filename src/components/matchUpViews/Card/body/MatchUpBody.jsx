import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MatchUpListContext } from "../../../../context/MatchUpListContext";
import * as MatchUpDataService from "../../../../services/matchUp.service";
import { setStatsPlayer } from "../../../../services/result.service";

function MatchUpBody(props) {
  const history = useHistory();

  const [matchUps] = React.useContext(MatchUpListContext);

  const _matchUp =
    matchUps[matchUps.findIndex((matchUp) => matchUp._id === props._id)];

  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    homeTeamScore: _matchUp.result.goals.player1,
    awayTeamScore: _matchUp.result.goals.player2
  });

  function handleSetResultHomeTeam(event) {
    setResult({
      homeTeamScore: event.target.value,
      awayTeamScore: result.awayTeamScore
    });
  }
  function handleSetResultAwayTeam(event) {
    setResult({
      homeTeamScore: result.homeTeamScore,
      awayTeamScore: event.target.value
    });
  }

  async function handleSetResult() {
    const data = {
      alreadyPlayed: true,
      result: {
        goals: {
          player1: result.homeTeamScore,
          player2: result.awayTeamScore
        }
      }
    };

    console.log(data);

    let player1Nickname = _matchUp.teams.home.player1.name;
    let player2Nickname = _matchUp.teams.away.player2.name;
    await setStatsPlayer(data, player1Nickname, player2Nickname);

    MatchUpDataService.update(props._id, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    setShowResult(false);

    window.location.reload();
  }

  function handleSetShowResult() {
    setShowResult(true);
  }

  const matchUpBody = matchUps
    .filter((matchUp) => matchUp._id === props._id)
    .map((matchUp) => {
      const alreadyPlayed = matchUp.alreadyPlayed;
      const homeTeamName = matchUp.teams.home.club.name;
      const awayTeamName = matchUp.teams.away.club.name;
      const homeTeamScore = matchUp.result.goals.player1;
      const awayTeamScore = matchUp.result.goals.player2;
      const probPlayer1 = matchUp.probability.player1Wins;
      const probDraw = matchUp.probability.draw;
      const probPlayer2 = matchUp.probability.player2Wins;

      var matchUpBodyDiv;

      if (showResult) {
        matchUpBodyDiv = (
          <div className="card-body">
            <div className="card-title">
              <div className="row">
                <div className="col-5">
                  <h5>{homeTeamName}</h5>
                </div>
                <div className="col-2">
                  <h5>x</h5>
                </div>
                <div className="col-5">
                  <h5>{awayTeamName}</h5>
                </div>
              </div>
            </div>
            <p className="card-text">
              <form>
                <div className="row">
                  <div className="col-5">
                    <input
                      type="number"
                      id="quantity"
                      // placeholder="0"
                      min="0"
                      max="100"
                      className="form-control"
                      onChange={handleSetResultHomeTeam}
                    ></input>
                  </div>

                  <div className="col-2"></div>
                  <div className="col-5">
                    <input
                      type="number"
                      id="typeNumber"
                      // placeholder="0"
                      min="0"
                      max="100"
                      className="form-control"
                      onChange={handleSetResultAwayTeam}
                    />
                  </div>
                </div>
              </form>
            </p>
            <button
              className="btn btn-primary btn-dark"
              onClick={handleSetResult}
            >
              Ergebnis speichern
            </button>
          </div>
        );
      } else {
        if (alreadyPlayed) {
          matchUpBodyDiv = (
            <div className="card-body">
              <div className="card-title">
                <div className="row">
                  <div className="col-5">
                    <h5>{homeTeamName}</h5>
                  </div>
                  <div className="col-2">
                    <h5>x</h5>
                  </div>
                  <div className="col-5">
                    <h5>{awayTeamName}</h5>
                  </div>
                </div>
              </div>
              <p className="card-text">
                <div className="row">
                  <div className="col-5">
                    <h5>{homeTeamScore}</h5>
                  </div>
                  <div className="col-2"></div>
                  <div className="col-5">
                    <h5>{awayTeamScore}</h5>
                  </div>
                </div>
              </p>
            </div>
          );
        } else {
          matchUpBodyDiv = (
            <div className="card-body">
              <div className="card-title">
                <div className="row">
                  <div className="col-5">
                    <h5>{homeTeamName}</h5>
                  </div>
                  <div className="col-2">
                    <h5>x</h5>
                  </div>
                  <div className="col-5">
                    <h5>{awayTeamName}</h5>
                  </div>
                </div>
              </div>
              <p className="card-text">
                <div className="row">
                  <div className="col-5">{probPlayer1}</div>
                  <div className="col-2">{probDraw}</div>
                  <div className="col-5">{probPlayer2}</div>
                </div>
              </p>
              <button
                className="btn btn-primary btn-dark"
                onClick={handleSetShowResult}
              >
                Ergebnis eintragen
              </button>
            </div>
          );
        }
      }

      return matchUpBodyDiv;
    });

  return <div>{matchUpBody}</div>;
}

export default MatchUpBody;
