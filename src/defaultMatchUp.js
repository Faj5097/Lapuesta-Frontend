const defaultMatchUp = {
  key: 1,
  dateTimeOfMatchUp: new Date(Date.now()),
  alreadyPlayed: true,
  result: {
    goals: {
      player1: 5,
      player2: 2,
    },
    winner: ["Jänki"],
    looser: ["Domain"],
    draw: false,
  },
  probability: {
    player1Wins: 1.4,
    draw: 4.5,
    player2Wins: 2.9,
  },
  teams: {
    home: {
      club: {
        name: "FC Bayern",
        stars: "5",
      },
      player1: {
        name: "Jänki",
        winsBefore: 9,
        drawsBefore: 5,
        losesBefore: 1,
        goals: {
          scored: {
            allTime: 60,
            thisMatchUp: 5,
          },
          conceded: {
            allTime: 34,
            thisMatchUp: 2,
          },
        },
      },
    },
    away: {
      club: {
        name: "LIVERPOOL",
        stars: "5",
      },
      player2: {
        name: "Domain",
        winsBefore: 4,
        drawsBefore: 10,
        losesBefore: 8,
        goals: {
          scored: {
            allTime: 55,
            thisMatchUp: 2,
          },
          conceded: {
            allTime: 88,
            thisMatchUp: 5,
          },
        },
      },
    },
  },
};

export default defaultMatchUp;
