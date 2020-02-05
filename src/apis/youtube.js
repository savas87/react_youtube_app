import axios from 'axios';
const KEY = 'AIzaSyCKQ3q_TLoJBoSBOtVy6-7sBYq4XiHHXO4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
})
