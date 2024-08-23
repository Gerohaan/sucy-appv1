import axios from 'axios';
import { header, baseURL } from './../utils/headers'

export async function getAll() {
    try {
        const url = baseURL + '/type_sans'
        const response = await axios.get(url, header)
        const responseData = await response.data
        return responseData
    } catch (error) {
        throw error
    }
}

