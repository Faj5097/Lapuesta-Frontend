import React from "react";
import * as MatchUpDataServices from "../services/matchUp.service";

export const MatchUpListContext = React.createContext();

// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_MATCHUP":
//       break;
//     // return [...state, action.payload].sort(
//     //   (a, b) =>
//     //     b.matchUpJSON.dateTimeOfMatchUp.getTime() -
//     //     a.matchUpJSON.dateTimeOfMatchUp.getTime()
//     // );
//     case "UPDATE_MATCHUP":
//       // {
//       //   return list.map((item) => {
//       //     if (item.id === action.payload.id) {
//       //       console.log(item);
//       //       item.matchUpJSON.result.goals.player1 = 99; //action.payload.goalsPlayer1;
//       //       item.matchUpJSON.result.goals.player2 = 99; //action.payload.goalsPlayer2;
//       //       item.matchUpJSON.alreadyPlayed = action.payload.alreadyPlayed;
//       //     }
//       //     return item;
//       //   });
//       // }
//       break;
//     default:
//       return state;
//   }
// }

function MatchUpListContextProvider(props) {
  const [matchUps, setMatchUps] = React.useState([]);

  return (
    <MatchUpListContext.Provider value={[matchUps, setMatchUps]}>
      {props.children}
    </MatchUpListContext.Provider>
  );
}

export { MatchUpListContextProvider };
