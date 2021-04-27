import React from "react";
import { useHistory } from "react-router";

function NewMatchUpButton() {
  const history = useHistory();

  function onClick() {
    history.push("/newMatchUp");
  }

  return (
    <button
      id="newMatchUpButton"
      className="btn btn-dark btn-circle btn-xl"
      onClick={onClick}
    >
      <h2>+</h2>
    </button>
  );
}

export default NewMatchUpButton;
