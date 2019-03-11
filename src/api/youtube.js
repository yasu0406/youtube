import axios from 'axios';

const KEY = 'AIzaSyDkBLvwAMznJu9K4D0DMwSs_Y0qZSrmXME';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});