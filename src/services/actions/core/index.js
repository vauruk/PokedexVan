import * as types from './types';
import Api from '../../util/api'
//import { Alert } from 'react-native'

import { errorClg } from '../../util/constants'
//import { I18n } from '@aws-amplify/core';
//import _ from 'lodash'


export const actionStartLoading = () => {
    //console.log("coreTypes.LOADING_STOP",coreTypes)
    return dispatch => {
        dispatch({ type: types.LOADING_START })
    }
}
export const showErrorModalAction = (isShow) => {
    //console.log("coreTypes.LOADING_STOP",coreTypes)
    return dispatch => {
        dispatch({ type: types.SHOW_MODAL_ERROR, payload: isShow })
    }
}

export const setLatLngAction = (latLng) => {
    // console.log("setLatLngAction", latLng)
    return dispatch => {
        dispatch({ type: types.LOAD_LAT_LNG, payload: latLng })
    }
}
export const setCalendarId = (id) => {
    return dispatch => {
        dispatch({ type: types.CALENDAR_ID, payload: id })
    }
}

/**
 * Resultado 
 * Data:{
        Address: "Rua vinte de marco"
        City: "Colombo"
        District: "Santa Terezinha"
        ZipCode: "83408999"
        State: "PR"
        IBGE: 4105805
    }
 * @param {cep} zipcode 
 */
export const loadAddressByPostalCodeAction = (zipcode) => {
    const params = {
        params: {
            zipcode,
        }
    }
    return (dispatch, getState) => {
        if (zipcode && zipcode.length >= 8) {
            const token = getState().auth.currentUser.access_token
            const PATH = 'HBus/GetAddressByZipcode'

            Api.get(PATH, params, token).then(
                dispatch({ type: types.LOADING_POSTAL_CODE, payload: true })
            ).then(res => {
                console.log("loadAddressByPostalCodeAction", res)
                dispatch({ type: types.LOADING_POSTAL_CODE, payload: false })
                dispatch({ type: types.ADDRESS_LOAD, payload: res.data.Data })

                // Alert.alert(
                //     I18n.get(JSON.parse(res.data.Success) ? 'Success' : 'Error'),
                //     I18n.get(res.data.Description),
                //     [
                //         // { text: 'OK', onPress: () => dispatch({ type: types.OPEN_FORGOT_PASSWORD, payload: false }) },
                //         { text: 'OK' },
                //     ],
                //     );
            }).catch(error => {
                errorClg(error, dispatch)
                dispatch({ type: types.LOADING_POSTAL_CODE, payload: false })
                //dispatch({ type: typesLoading.LOADING, payload: false })
            });
        }
    }
}