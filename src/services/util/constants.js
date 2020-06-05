/**
 * @author Vanderson de Moura Vauruk
 * @date 05/06/2020
 */
import {
    Icon
} from 'native-base'
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
    //CrashReporter.notify(error);
    //dispatch({ type: typesLoading.LOADING, payload: false })
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

import Leaf from '../../assets/leaf.png'
import Bug from '../../assets/bug.png'
import Water from '../../assets/water.png'
import Poison from '../../assets/poison.png'
import Fire from '../../assets/fire.png'
import Flying from '../../assets/flying.png'
import Normal from '../../assets/normal.png'

export const selectColorByType = (type) => {
    switch (type) {
        case 'grass': {
            return { color: '#8BBF8A', image: Leaf }
        }
        case 'poison': {
            return { color: '#aa5dcf', image: Poison }
        }
        case 'fire': {
            return { color: '#f3a756', image: Fire }
        }
        case 'water': {
            return { color: '#58abf6', image: Water }
        }
        case 'bug': {
            return { color: '#8bd675', image: Bug }
            //return { color: '#8bd675', icon: <Icon type="MaterialCommunityIcons" name="flash" style={{ fontSize: 15, color: theme.WHITE_COLOR }} /> }
        }
        case 'normal': {
            return { color: '#b5b9c5', image: Normal }
        }
        case 'electric': {
            return { color: '#eee535', image: Bug }
        }
        case 'ground': {
            return { color: '#dd7749', image: Bug }
        }
        case 'fairy': {
            return { color: '#ee6ec7', image: Bug }
        }
        case 'flying': {
            return { color: '#748fc9', image: Flying }
        }
        case 'fighting': {
            return { color: '#d04164', image: Bug }
        }
        case 'fada': {
            return { color: '#ee6ec8', image: Bug }
        }
        default:
            return '#ffffff';
    }
}