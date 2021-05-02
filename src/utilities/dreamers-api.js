const BASE_URL = "/api/dreamers";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function create(dreamer) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(dreamer),
  }).then((res) => res.json());
}

export function update(dreamer) {
  return fetch(`${BASE_URL}/${dreamer._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(dreamer),
  }).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
