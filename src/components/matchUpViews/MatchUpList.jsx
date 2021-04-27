import React from "react";
import { MatchUpListContext } from "../context/MatchUpListContext";
import MatchUp from "./Card/MatchUp";
import NewMatchUpButton from "./NewMatchUpButton";

function MatchUpList() {
  const [state, dispatch] = React.useContext(MatchUpListContext);

  const matchUpList = state.map((matchUp) => <MatchUp id={matchUp.id} />);

  return (
    <div>
      {matchUpList}
      <NewMatchUpButton />
    </div>
  );
}

export default MatchUpList;
