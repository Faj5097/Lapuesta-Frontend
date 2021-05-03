import http from "../http-common";

function getAll() {
  return http.get("/matchUps", [{ $sort: { dateTimeOfMatchUp: 1 } }]);
}

function create(data) {
  return http.post("/matchUps", data);
}

function update(id, data) {
  return http.patch("/matchUps/" + id, data);
}

export { getAll, create, update };
