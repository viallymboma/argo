import axios from 'axios';

import { GET_SAILORS } from './types';


// GET SAILORS
export const getSailors = () => dispatch => {
    axios
        .get("/api/matello/")
        .then(res => {
            dispatch({
                type: GET_SAILORS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}