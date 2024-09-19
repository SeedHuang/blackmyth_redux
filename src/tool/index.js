import axios from 'axios';
import { GlobalContext } from '../App';
import { useContent } from 'react';
export const sendPost = async (url, parameter) => {
    return new Promise((resolve, reject) => {
        axios.post(url, parameter).then((result)=>{
            if(result.data.code === 200) {
                resolve(result.data);
            } else {
                reject(result.data);
            }
        }).catch((error)=> {
            reject(error);
        })
    });
}

export const sendGet = async (url, parameter = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: {
                ...parameter
            }
        }).then((result)=>{
            if(result.data.code === 200) {
                resolve(result.data);
            } else {
                reject(result.data);
            }
        }).catch((error)=> {
            reject(error);
        })
    });
}

export const combineComponentClass = function (props = {}, originClassName = '') {
    const { className = '' } = props;
    const classnames = [originClassName];
    if(className) {
        classnames.push(className);
    }
    return classnames;
}

