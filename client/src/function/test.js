import API from "../function/backendAPI";

const magic = (options) => {
    return API.post('/magic', {options})
}

const philips3t = (options) => {
    return API.post('/qsm_philips_3t', {options})
}

const simens3t = (options) => {
    return API.post('/qsm_simens_3t', {options})
}

export {
    magic,
    philips3t,
    simens3t
}