import axios from 'axios';
import { header, baseURL } from './../utils/headers'

export async function login(param) {
    try {
        const url = baseURL + '/login'
        const response = await axios.post(url, param, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}

