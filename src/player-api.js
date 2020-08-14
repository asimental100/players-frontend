import request from 'superagent';

// TODO: change this URL depending on environment
const URL = process.env.REACT_APP_API_URL;

export function fetchPlayers() {
    return request.get(`${URL}/players`);
}

export function fetchPlayer(id) {
    return request.get(`${URL}/players/${id}`);
}
  
// lets assume they pass us some player data . . .
export function createPlayer(playerData) {
    return request.post(`${URL}/players`, playerData)
}
