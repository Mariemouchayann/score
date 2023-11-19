import axios from "axios"

/**
 * 
 * @param options 
 */
export const getSpecialities = async (options : any) => {
    return await axios.get(`${process.env.API_URL}specialities`)
}