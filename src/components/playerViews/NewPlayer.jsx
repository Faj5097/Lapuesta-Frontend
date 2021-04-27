import React from "react";

function NewPlayer() {
  return (
    <div className=".container">
      <form>
        <div className="card text-center">
          <div className="card-header">
            <a type="button" className="close" aria-label="Close" href="/">
              <span aria-hidden="true">×</span>
            </a>
            <h5>Neuen Spieler anlegen</h5>
          </div>
          <div className="card-body">
            <div className="card-title">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
              ></input>
            </div>
            <a href="/" className="btn btn-primary btn-dark">
              Spieler anlegen
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewPlayer;
