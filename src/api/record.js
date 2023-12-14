import axios from 'axios'

const url = process.env.REACT_APP_BASE_URL + 'record/';


//Create a record
const createRecord = async (data) => {
    try {
        const response = await axios.post(url + 'create', data);
        return response.data;
    } catch (error) {

    }
}

//Get all records
const getAllRecords = async (pageSize, pageIndex) => {
    try {
        const { data } = await axios.get(url + `getall/?pagesize=${pageSize}&pageindex=${pageIndex}`);
        return data.data;
    } catch (error) {

    }
}

//Update a record
const updateRecord = async (data) => {
    try {
        const response = await axios.put(url + 'update', data);
        return response.data;
    } catch (error) {

    }
}

//Delete a record
const deleteRecord = async (id) => {
    try {
        const response = await axios.delete(url + id +'/delete');
        return response.data;
    } catch (error) {

    }
}

//Get a record
const getRecord = async (id) => {
    try {
        const response = await axios.get(url + 'get/' + id);
        return response.data;
    } catch (error) {

    }
}

export { createRecord, getAllRecords, updateRecord, deleteRecord, getRecord }