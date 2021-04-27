import React from "react";

export const MatchUpListContext = React.createContext();

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_MATCHUP":
      return [...state, action.payload].sort(
        (a, b) =>
          b.matchUpJSON.dateTimeOfMatchUp.getTime() -
          a.matchUpJSON.dateTimeOfMatchUp.getTime()
      );
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
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <MatchUpListContext.Provider value={[state, dispatch]}>
      {props.children}
    </MatchUpListContext.Provider>
  );
}

export { MatchUpListContextProvider };
