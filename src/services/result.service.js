import * as PlayerDataService from "../services/player.service";

async function setStatsPlayer(data, player1Nickname, player2Nickname) {
  let arrPlayers = [];

  //Get current stats due to wins, draws, loses
  await PlayerDataService.getAll()
    .then((response) => {
      arrPlayers = response.data;
    })
    .catch((e) => {
      console.log(e);
    });

  //Decide who won or lost
  let player1 = arrPlayers.filter(
    (player) => player.nickname === player1Nickname
  )[0];
  let player2 = arrPlayers.filter(
    (player) => player.nickname === player2Nickname
  )[0];

  if (data.result.goals.player1 > data.result.goals.player2) {
    player1.wins++;
    player2.loses++;
  } else if (data.result.goals.player1 === data.result.goals.player2) {
    player1.draws++;
    player2.draws++;
  } else {
    player1.loses++;
    player2.wins++;
  }

  PlayerDataService.update(player1._id, player1);
  PlayerDataService.update(player2._id, player2);
}

export { setStatsPlayer };
