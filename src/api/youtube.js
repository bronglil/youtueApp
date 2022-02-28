
import axios from 'axios';


const KEY= 'AIzaSyBixNLHpQ4WqPaYIM5Pwe3gREV7twawz78'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});


