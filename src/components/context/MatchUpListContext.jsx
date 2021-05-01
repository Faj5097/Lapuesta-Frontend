import React from "react";
import axios from "axios";

export const MatchUpListContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "ADD_MATCHUP":
      axios
        .post("http://localhost:4000/matchUps", action.payload.matchUpJSON, {
          crossdomain: true,
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      axios
        .get("http://localhost:4000/matchUps")
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

      break;
    // return [...state, action.payload].sort(
    //   (a, b) =>
    //     b.matchUpJSON.dateTimeOfMatchUp.getTime() -
    //     a.matchUpJSON.dateTimeOfMatchUp.getTime()
    // );
    case "UPDATE_MATCHUP": {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          console.log(item);
          item.matchUpJSON.result.goals.player1 = 99; //action.payload.goalsPlayer1;
          item.matchUpJSON.result.goals.player2 = 99; //action.payload.goalsPlayer2;
          item.matchUpJSON.alreadyPlayed = action.payload.alreadyPlayed;
        }
        return item;
      });
    }
    default:
      return state;
  }
}

function MatchUpListContextProvider(props) {
  const [iniState, setIniState] = React.useState("");
  axios
    .get("http://localhost:4000/matchUps")
    .then((response) => setIniState(response.data.total));

  const [state, dispatch] = React.useReducer(reducer, iniState);

  return (
    <MatchUpListContext.Provider value={[state, dispatch]}>
      {props.children}
    </MatchUpListContext.Provider>
  );
}

export { MatchUpListContextProvider };
