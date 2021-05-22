import http from "./http-common";

function getAll() {
  return http.get("/teams", [{ $sort: { country: -1 } }]);
}

export { getAll };
