import * as types from './types';
import Api from '../../util/api'
//import { Alert } from 'react-native'

import { errorClg } from '../../util/constants'

export const pokedexListAction = () => {
    //const token = getState().auth.currentUser.access_token
    const PATH = '/pokedex'
    console.log("teste ")
    return (dispatch) => {
        Api.get(PATH, null, null).then(
            // dispatch({ type: types.LOADING_POSTAL_CODE, payload: true })
        ).then(res => {
            console.log("res", res.data.results)
            dispatch({ type: types.POKEDEX_LIST, payload: res.data.results })
        }).catch(error => {
            errorClg(error, dispatch)
        });
    };
}