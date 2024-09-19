import { sendPost, sendGet } from "@tool";

export const addUnitInfo = async (parameters) => {
    return sendPost('//localhost:4000/write/addUnitInfo', {
        ...parameters
    });
}

export const updateUnitInfo = (parameters) => {
    return sendPost('//localhost:4000/write/updateUnitInfo', {
        ...parameters
    });
}

export const getCategories = async () => {
    return sendGet('//localhost:4000/get/categories');
}

export const getUnits = async () => {
    return sendGet('//localhost:4000/get/units');
}

export const getUnitById = async (id) => {
    return sendGet('//localhost:4000/get/unitById', {id});
}