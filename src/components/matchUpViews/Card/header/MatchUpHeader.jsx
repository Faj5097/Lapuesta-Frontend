import React from "react";
import { MatchUpListContext } from "../../../context/MatchUpListContext";

function MatchUpHeader(props) {
  const [state, dispatch] = React.useContext(MatchUpListContext);

  const matchUpHeader = state
    .filter((matchUp) => matchUp.id === props.id)
    .map((matchUp) => {
      const alreadyPlayed = matchUp.matchUpJSON.alreadyPlayed;
      const homePlayerName = matchUp.matchUpJSON.teams.home.player1.name;
      const awayPlayerName = matchUp.matchUpJSON.teams.away.player2.name;

      var matchUpHeaderDiv;

      if (alreadyPlayed) {
        matchUpHeaderDiv = (
          <div className="card-header">
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <div className="row">
              <div className="col">{homePlayerName}</div>
              <div className="col">vs</div>
              <div className="col">{awayPlayerName}</div>
            </div>
          </div>
        );
      } else {
        matchUpHeaderDiv = (
          <div className="card-header">
            <button type="button" className="close" aria-label="Close">
              <span aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                </svg>
              </span>
            </button>
            <div className="row">
              <div className="col">{homePlayerName}</div>
              <div className="col">vs</div>
              <div className="col">{awayPlayerName}</div>
            </div>
          </div>
        );
      }

      return matchUpHeaderDiv;
    });

  return <div>{matchUpHeader}</div>;
}

export default MatchUpHeader;
