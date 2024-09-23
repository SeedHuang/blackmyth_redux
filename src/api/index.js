import { sendPost, sendGet } from "@tool";
// import reuslt from './reduxApi';
export const addUnitInfo = async (parameters) => {
    return sendPost('//127.0.0.1:4000/write/addUnitInfo', {
        ...parameters
    });
}

export const updateUnitInfo = (parameters) => {
    return sendPost('//127.0.0.1:4000/write/updateUnitInfo', {
        ...parameters
    });
}

export const getCategories = async () => {
    return sendGet('//127.0.0.1:4000/get/categories');
}

export const getUnits = async () => {
    return sendGet('//127.0.0.1:4000/get/units');
}

export const getUnitById = async (id) => {
    return sendGet('//127.0.0.1:4000/get/unitById', {id});
}