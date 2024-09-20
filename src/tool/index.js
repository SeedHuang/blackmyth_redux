import axios from 'axios';
export const sendPost = async (url, parameter) => {
    return new Promise((resolve, reject) => {
        return axios.post(url, parameter).then((result)=>{
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
        return axios.get(url, {
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
    const otherClasses = Array.prototype.slice.call(arguments, 2);
    const { className = '' } = props;
    const classnames = [originClassName];
    if(className) {
        classnames.push(className);
    }
    return [
        ...classnames,
        ...otherClasses
    ];
}

