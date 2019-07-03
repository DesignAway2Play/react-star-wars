const BASE_URL = 'https://swapi.co/api/';

export function fetchAllStarships() {
    return fetch(`${BASE_URL}starships`, { mode: 'cors' }).then(res => res.json());
}

export function fetchAllVehicles() {
    return fetch(`${BASE_URL}vehicles`, { mode: 'cors' }).then(res => res.json());
}