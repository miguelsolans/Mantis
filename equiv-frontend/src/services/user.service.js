/**
 * User Service: Access Backend Server Data
 */

import axios from 'axios';
import authHeader from './auth-header';
import config from '../config';

class UserService {
    getUser(username) {
        return axios.get(`${config.API_SERVER}/user/${username}`, {
            headers: authHeader()
        });
    }

    newProcess(student) {
        console.log(student.nomeAluno);

        return axios.post(`${config.API_SERVER}/processo`, student, {
            headers: authHeader()
        })
    }
}

export default new UserService();