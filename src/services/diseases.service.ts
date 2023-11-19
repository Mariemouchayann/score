import axios from "axios"

/**
 * 
 * @param options 
 */
export const getDiseases = async (options : any) => {
    return await axios.get(`${process.env.API_URL}diseases`)
}