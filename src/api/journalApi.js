import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-73162-default-rtdb.firebaseio.com',
});

export default journalApi;