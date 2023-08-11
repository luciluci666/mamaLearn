import axios from 'axios';

export async function getMyIp () {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data;
}