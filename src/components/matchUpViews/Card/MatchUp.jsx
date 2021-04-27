import React from "react";
import MatchUpHeader from "./header/MatchUpHeader";
import MatchUpBody from "./body/MatchUpBody";

function MatchUp(props) {
  return (
    <div>
      <div className=".container">
        <div className="card text-center">
          <MatchUpHeader id={props.id} />
          <MatchUpBody id={props.id} />
        </div>
      </div>
    </div>
  );
}

export default MatchUp;
