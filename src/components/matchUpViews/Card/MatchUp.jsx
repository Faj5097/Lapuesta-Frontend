import React from "react";
import MatchUpHeader from "./header/MatchUpHeader";
import MatchUpBody from "./body/MatchUpBody";

function MatchUp(props) {
  return (
    <div>
      <div className=".container">
        <div className="card text-center">
          <MatchUpHeader _id={props._id} />
          <MatchUpBody _id={props._id} />
        </div>
      </div>
    </div>
  );
}

export default MatchUp;
