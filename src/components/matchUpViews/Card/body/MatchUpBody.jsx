import React, { useState } from "react";
import { MatchUpListContext } from "../../../../context/MatchUpListContext";
import * as MatchUpDataService from "../../../../services/matchUp.service";

function MatchUpBody(props) {
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

  function handleSetResult() {
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

    MatchUpDataService.update(props._id, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    setShowResult(false);
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
                      placeholder="0"
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
                      placeholder="0"
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
                  <div className="col-5">1,8</div>
                  <div className="col-2">3,1</div>
                  <div className="col-5">2,4</div>
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
