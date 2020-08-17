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
    const link = `${URL}/players/${id}`;
    console.log(link);

    return request.get(link);
}

export function deletePlayer(id) {
    return request.delete(`${URL}/players/${id}`);
}

export function updatePlayer(id, updatedPlayer) {
    const link = `${URL}/players/${id}?${updatedPlayer}`;
    console.log(link);
    
    return request.put(link);
}

export function createPlayer(playerData) {
    const link = `${URL}/players?${playerData}`;
    console.log(link);

    return request.post(link);
}
