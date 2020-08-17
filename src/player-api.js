import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function fetchPlayers() {
    try{
        return request.get(`${URL}/players`);
    } catch(e) {
        return { error: e.message }
    }
}


export function fetchPositions() {
    try{
        return request.get(`${URL}/positions`);
    } catch(e) {
        return { error: e.message }
    }
}

export function fetchPlayer(id) {
    return request.get(`${URL}/players/${id}`);
}

export function deletePlayer(id) {
    return request.delete(`${URL}/players/${id}`);
}

export function updatePlayer(id, updatedPlayer) {
    return request.put(`${URL}/players/${id}`, updatedPlayer);
}

export function createPlayer(playerData) {
    return request.post(`${URL}/players`, playerData)
}
