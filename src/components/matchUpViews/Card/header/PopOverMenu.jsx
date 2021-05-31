import React from "react";
import { MatchUpListContext } from "../../../../context/MatchUpListContext";
import * as MatchUpDataService from "../../../../services/matchUp.service";
import { setDeleteStatsPlayer } from "../../../../services/result.service";

function PopoverMenu(props) {
  const [matchUps] = React.useContext(MatchUpListContext);

  const _matchUp =
    matchUps[matchUps.findIndex((matchUp) => matchUp._id === props._id)];

  async function handleDelete() {
    const data = {
      result: {
        goals: {
          player1: _matchUp.result.goals.player1,
          player2: _matchUp.result.goals.player2
        }
      }
    };

    console.log(data);

    let player1Nickname = _matchUp.teams.home.player1.name;
    let player2Nickname = _matchUp.teams.away.player2.name;

    if (_matchUp.alreadyPlayed) {
      await setDeleteStatsPlayer(data, player1Nickname, player2Nickname);
    }

    MatchUpDataService.deleteById(props._id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });

    // window.location.reload();
  }

  return (
    <div className="btn-group close">
      <button
        type="button"
        className="btn btn-sm btn-outline-secondary btn-menu-card"
        onClick={handleDelete}
      >
        <span class="fa fa-trash" aria-hidden="true"></span>
      </button>
      <button
        type="button"
        className="btn btn-sm btn-outline-secondary btn-menu-card"
      >
        <span class="fa fa-edit" aria-hidden="true"></span>
      </button>
    </div>
    //   <div>
    //       <button
    //         type="button"
    //         className="btn close"
    //         aria-label="Close"
    //         onClick={handleBtnClick}
    //       >
    //         <span aria-hidden="true">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             className="bi bi-three-dots-vertical"
    //             viewBox="0 0 16 16"
    //           >
    //             <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
    //           </svg>
    //         </span>
    //       </button>
    //       {isOpen && (
    //         <nav class="nav flex-column">
    //           <a class="nav-link active" href="#">
    //             Active
    //           </a>
    //           <a class="nav-link" href="#">
    //             Link
    //           </a>
    //           <a class="nav-link" href="#">
    //             Link
    //           </a>
    //           <a class="nav-link disabled" href="#">
    //             Disabled
    //           </a>
    //         </nav>
    //       )}
    //     </div>
  );
}

export default PopoverMenu;
