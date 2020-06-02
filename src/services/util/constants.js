import * as typesCore from '../actions/core/types';
//import { connectionTestUrl } from './netConnection'
import CrashReporter from '../util/crashReporter'
import NetInfo from "@react-native-community/netinfo";
const URL_API = 'homolog.healthyou.com.br'
//const URL_PROD = 'hbus.healthyou.com.br/v2'
const URL_PROD = URL_API
const URL_DEV = URL_API

export const getUrl = () => {
    if (__DEV__) {
        URL = `https://${URL_DEV}/api`
        // URL = `https://${URL_DEV}/api`;
    } else {
        URL = `https://${URL_PROD}/api`
        //URL = `https://${URL_PROD}/api`;
    }

    // console.log("Mode Http__DEV__", __DEV__, URL)
    return URL
}

export const TIME_ZONE = "America/Sao_Paulo";
export const formatDataHourChat = 'DD/MM/YY HH:mm';
export const formatDataHour = 'DD/MM/YYYY - HH:mm';
export const formatDataSort = 'DD/MM/YY';
export const formatData = 'DD/MM/YYYY';

export const NAME_CALENDAR_DAFAULT = 'HealthYou_Calendar'

/* DEFAULT APP CONST VALUES */
export const defaultConst =
{
    /* GEOLOCATION AND GOOGLE */
    googlePlacesRadius: '7000', // Value in meters.
    /* GOOGLE PLACES API KEY */
    googlePlacesApiKey: 'AIzaSyAlAXc2nJVklH9HDqc9tK6GO1F-56wIX8s',
};

export const latitudeStatic = -25.4950497
export const longitudeStatic = -49.4302269

export const planHealth = {
    PLAN_FREE: 1,
    PLAN_PLUS: 2,
    PLAN_PREMIUM: 3,
    PLAN_PREMIUM_FAMILY: 4
}

export const DaysOfWeek = [
    {
        id: 0,
        value: 'sunday',
        initials: 'D'
    },
    {
        id: 1,
        value: 'monday',
        initials: 'S'
    },
    {
        id: 2,
        value: 'tuesday',
        initials: 'T'
    },
    {
        id: 3,
        value: 'wednesday',
        initials: 'Q'
    },
    {
        id: 4,
        value: 'thursday',
        initials: 'Q'
    },
    {
        id: 5,
        value: 'friday',
        initials: 'S'
    },
    {
        id: 6,
        value: 'saturday',
        initials: 'S'
    },

]

export const getWeekdayByNumber = (weekNumber) => {
    return DaysOfWeek.find(item => item.id === weekNumber)
}
export const getWeekdayByName = (weekName) => {
    console.log("getWeekdayByName", weekName)
    return DaysOfWeek.find(item => item.value === weekName)
}

export const showModalInfo = (code, title, message, dispatch) => {
    setTimeout(() => {
        const messagePayload = {
            code,
            title,
            message
        }
        dispatch({
            type: typesCore.MESSAGE_ERROR_MODAL,
            payload: messagePayload
        })
        dispatch({ type: typesCore.SHOW_MODAL_ERROR, payload: true })
    }, 2000);
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
        showModalInfo(504, "Ops! Houve um problema.", "Por favor verifique sua conexão e tente novamente!", dispatch)
        // setTimeout(() => {
        //     // const message = {
        //     //     code: 504,
        //     //     title: "",
        //     //     // message: error.message
        //     //     message: 
        //     // }
        //     // dispatch({
        //     //     type: typesCore.MESSAGE_ERROR_MODAL,
        //     //     payload: message
        //     // })
        //     // dispatch({ type: typesCore.SHOW_MODAL_ERROR, payload: true })
        // }, 3000);

        // Alert.alert(
        //     'Error 500: Server Down',
        //     error.message,
        //     [
        //         { text: 'OK' },
        //     ],
        // );
    }

}

/* Public key to encrypt data before send to backend */
export const publicKeyRsa = `-----BEGIN RSA PUBLIC KEY-----
MIICCgKCAgEAwg9/5W8V2bHb5HrUhzHTXSpdNgI9fahnCJECIllWq8p8cciQfY9M
piok4K8Ei4OXOHembJQUbSCr50mXJrE1eOjrqi6scNFAFfEWWzYuY7KOKOqPAv8v
LopKB0nkMULKPBco7j1bEoiKEh9C2DXoww0ygdZzYrp3VhorOsVpzhgUphQJdHWa
w0r7EmkRvzpC/vYRjs3ZqG1I+pVUUV4SragkqWW7wvkciW4tplXRAm61l4eseAor
O6qG5YtFpPitSlaLU6kl5UOEH7cbAr9egDSHH9XIl1KStBRc4SaP9dZd7K0RQjqo
MnUvVSf/lQN6uK0xiR3ssJC1/wwcfNeONC4LB/lxtajC8HbxfOA/34bIbQUFLnAg
jubHS16PGPzGu5DsBTbDwnykdFyQyS8IZRSunMI1VvkFuWkwKxUSEBB2dhCxTvJb
vrSzbrQ9txmQQqnCcRYkm96A2qTnN/I5kL/X/puDz8JLOQaVLCRQ3V5Xtc6tvrQp
3Wvs3+dQ8BreoQULZTkBuRY5kv8RDB7Pu+MZsuzPFRi3iTmE92keZnJ51QQ6Ych6
LbcRPJTz33DmSh+HZ/IwZcbTEfolzZu82NUvfIaTxwrwNhfFOBo7I8JhoaWBi2O+
LCUpEJVoT2hT+v29H+oCkvLISrI0Il5ehRETBojV6dMp5ym9b0rCdj0CAwEAAQ==
-----END RSA PUBLIC KEY-----`;

export const privateKeyRsa = `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`;