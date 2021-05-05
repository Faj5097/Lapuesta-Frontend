import http from "../http-common";

function getAll() {
  return http.get("/players", [{ $sort: { nickname: 1 } }]);
}

function create(data) {
  return http.post("/players", data);
}

function update(id, data) {
  return http.patch("/players/" + id, data);
}

export { getAll, create, update };
