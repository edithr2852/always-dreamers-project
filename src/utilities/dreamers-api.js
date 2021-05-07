import {getToken} from "./users-service"
const BASE_URL = "/api/dreamers";


export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function create(dreamer) {
  const token = getToken();
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json",
    "Authorization": `Bearer ${token}`, },
    body: JSON.stringify(dreamer),
  }).then((res) => res.json());
}

export function update(dreamer) {
  const token = getToken();
  return fetch(`${BASE_URL}/${dreamer._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json",
    "Authorization": `Bearer ${token}`, },
    body: JSON.stringify(dreamer),
  }).then((res) => res.json());
}

export function deleteOne(id) {
  const token = getToken();
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json",
    "Authorization": `Bearer ${token}`, },
  }).then((res) => res.json());
}
