import React from "react";
import { MatchUpListContext } from "../../../../context/MatchUpListContext";
import PopOverMenu from "./PopOverMenu";

function MatchUpHeader(props) {
  const [matchUps, setMatchUps] = React.useContext(MatchUpListContext);

  const matchUpHeader = matchUps
    .filter((matchUp) => matchUp._id === props._id)
    .map((matchUp) => {
      console.log(matchUp);

      const alreadyPlayed = matchUp.alreadyPlayed;
      const homePlayerName = matchUp.teams.home.player1.name;
      const awayPlayerName = matchUp.teams.away.player2.name;

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
            <PopOverMenu />
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
