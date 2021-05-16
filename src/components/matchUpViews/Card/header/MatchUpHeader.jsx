import React from "react";
import { MatchUpListContext } from "../../../../context/MatchUpListContext";
import PopOverMenu from "./PopOverMenu";

function MatchUpHeader(props) {
  const [matchUps, setMatchUps] = React.useContext(MatchUpListContext);

  const matchUpHeader = matchUps
    .filter((matchUp) => matchUp._id === props._id)
    .map((matchUp) => {
      console.log(matchUp);

      const homePlayerName = matchUp.teams.home.player1.name;
      const awayPlayerName = matchUp.teams.away.player2.name;

      return (
        <div className="card-header">
          <PopOverMenu _id={props._id} />
          <div className="row">
            <div className="col">{homePlayerName}</div>
            <div className="col">vs</div>
            <div className="col">{awayPlayerName}</div>
          </div>
        </div>
      );
    });

  return <div>{matchUpHeader}</div>;
}

export default MatchUpHeader;
