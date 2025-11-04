import axios from 'axios';

const API_URL = 'http://localhost:3000/api/tasas';

export const TasaApi = {
    // GET
    getAll: () => {
        return axios.get(API_URL);
    },
    // POST Crea un registro manual
    create: (data) => {
        return axios.post(API_URL, data)
    },
    // PUT Actualizacion manual
    update: (id, data) => {
        return axios.put(`${API_URL}/${id}`, data)
    },
    // DELETE Elimina registros manual
    remove: (id) => {
        return axios.delete(`${API_URL}/${id}`)
    },
    // POST Actualizacion automatica
    updateAutomatic: () => {
        return axios.post(`${API_URL}/actualizar-hoy`)
    }
}