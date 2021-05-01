import React from "react";
import axios from "axios";
import { MatchUpListContext } from "../context/MatchUpListContext";
import MatchUp from "./Card/MatchUp";
import NewMatchUpButton from "./NewMatchUpButton";

function MatchUpList() {
  // const [state, dispatch] = React.useContext(MatchUpListContext);
  const [list, setList] = React.useState("");

  axios
    .get("http://localhost:4000/matchUps")
    .then((response) => setList(response.data));

  const matchUpList = list.map((matchUp) => <MatchUp _id={matchUp._id} />);

  return (
    <div>
      {matchUpList}
      <NewMatchUpButton />
    </div>
  );
}

export default MatchUpList;
