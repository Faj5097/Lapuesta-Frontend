import React from "react";

function MatchUp(props) {
  return (
    <div className=".container">
      <div className="card text-center">
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
            <div className="col">{props.homePlayerName}</div>
            <div className="col">vs</div>
            <div className="col">{props.awayPlayerName}</div>
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">
            <div className="row">
              <div className="col-5">
                <h5>FC BAYERN</h5>
              </div>
              <div className="col-2">
                <h5>x</h5>
              </div>
              <div className="col-5">
                <h5>LIVERPOOL</h5>
              </div>
            </div>
          </div>
          <p className="card-text">
            <div className="row">
              <div className="col-5">1,8</div>
              <div className="col-2">3,1</div>
              <div className="col-5">2,4</div>
            </div>
          </p>
          <a href="/" className="btn btn-primary btn-dark">
            Ergebnis eintragen
          </a>
        </div>
      </div>
    </div>
  );
}

export default MatchUp;
