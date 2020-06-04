import * as typesCore from '../actions/core/types';
const URL_API = 'pokeapi.co'
const URL_PROD = URL_API
const URL_DEV = URL_API

export const getUrl = () => {
    if (__DEV__) {
        URL = `https://${URL_DEV}/api/v2`
    } else {
        URL = `https://${URL_PROD}/api/v2`
    }

    // console.log("Mode Http__DEV__", __DEV__, URL)
    return URL
}

export const errorClg = async (error, dispatch) => {
    CrashReporter.notify(error);
    dispatch({ type: typesLoading.LOADING, payload: false })
    console.log("error", error.toJSON());
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.data) {
            console.log("daTA", error.response.data);
        }
        console.log("STATUS", error.response.status);
        console.log("HEADERS", error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log("error.request", error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log("config", error.config);


    if (error.name === 'Error') {
        // Alert.alert(
        //     'Error 500: Server Down',
        //     error.message,
        //     [
        //         { text: 'OK' },
        //     ],
        // );
    }
}
