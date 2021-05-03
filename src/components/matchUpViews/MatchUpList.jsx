import React from "react";
import MatchUp from "./Card/MatchUp";
import NewMatchUpButton from "./NewMatchUpButton";
import * as MatchUpDataService from "../../services/matchUp.service";
import { MatchUpListContext } from "../../context/MatchUpListContext";

function MatchUpList() {
  const [matchUps, setMatchUps] = React.useContext(MatchUpListContext);

  function retrieveMatchUps() {
    MatchUpDataService.getAll()
      .then((response) => {
        setMatchUps(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  React.useEffect(retrieveMatchUps, []);

  const matchUpList = []
    .concat(matchUps)
    .sort(
      (a, b) =>
        new Date(b.dateTimeOfMatchUp).getTime() -
        new Date(a.dateTimeOfMatchUp).getTime()
    )
    .map((matchUp) => <MatchUp _id={matchUp._id} key={matchUp._id} />);

  return (
    <div>
      {matchUpList}
      <NewMatchUpButton />
    </div>
  );
}

export default MatchUpList;
