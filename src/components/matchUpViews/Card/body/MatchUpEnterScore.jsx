import React from "react";

function MatchUpScore() {
  return (
    <div className=".container">
      <div className="card text-center">
        <div className="card-header">
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="row">
            <div className="col">FRÄNZL</div>
            <div className="col">vs</div>
            <div className="col">JÄNKI</div>
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
            <form>
              <div className="row">
                <div className="col-5">
                  <input
                    type="number"
                    id="quantity"
                    placeholder="0"
                    min="1"
                    max="5"
                    className="form-control"
                  ></input>
                </div>

                <div className="col-2"></div>
                <div className="col-5">
                  <input
                    type="number"
                    id="typeNumber"
                    placeholder="0"
                    min="0"
                    max="5"
                    className="form-control"
                  />
                </div>
              </div>
            </form>
          </p>
          <a href="/" className="btn btn-primary btn-dark">
            Ergebnis speichern
          </a>
        </div>
      </div>
    </div>
  );
}

export default MatchUpScore;
