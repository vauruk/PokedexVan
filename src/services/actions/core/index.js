/**
 * @author Vanderson de Moura Vauruk
 * @date 05/06/2020
 */
import * as types from './types';
import Api from '../../util/api'
//import { Alert } from 'react-native'


export const pokemonListAction = (textToSearch) => {
    const PATH = '/pokemon?offset=5&limit=5'
    return (dispatch) => {
        dispatch({ type: types.POKEDEX_LIST, payload: undefined })
        Api.get(PATH, null, null).then(
            dispatch({ type: types.LOADING, payload: true })
        ).then(res => {
            dispatch({ type: types.POKEDEX_COUNT, payload: res.data.count })
            dispatch({ type: types.FORWARD_ACTION, payload: res.data.next })
            dispatch({ type: types.BACK_ACTION, payload: res.data.previous })

            dispatch({ type: types.LOADING, payload: false })
            console.log("res", textToSearch)
            let pokedexList = res.data.results
            if (textToSearch && textToSearch.length > 2) {
                pokedexList = pokedexList.filter((item) => {
                    console.log("item", item, item.name.toLowerCase().indexOf(textToSearch.toLowerCase()))
                    return item.name.toLowerCase().indexOf(textToSearch.toLowerCase()) == 0;
                })
                console.log("list new ", pokedexList)
            }
            dispatch({ type: types.POKEDEX_LIST, payload: pokedexList })

        }).catch(error => {
            dispatch({ type: types.LOADING, payload: false })
            console.log("error:", error)
        });
    };
}


export const previousAction = () => {
    return (dispatch, getState) => {
        const url = getState().core.previous
        let lastIndex = url ? url.lastIndexOf('v2') : 0;
        const path = url.substring(lastIndex + 3, url.lenght)
        console.log("previous", path)
        dispatch({ type: types.POKEDEX_LIST, payload: undefined })
        Api.get(path, null, null).then(
            dispatch({ type: types.LOADING, payload: true })
        ).then(res => {
            dispatch({ type: types.POKEDEX_LIST, payload: res.data.results })
            dispatch({ type: types.FORWARD_ACTION, payload: res.data.next })
            dispatch({ type: types.BACK_ACTION, payload: res.data.previous })
            dispatch({ type: types.LOADING, payload: false })

        }).catch(error => {
            dispatch({ type: types.LOADING, payload: false })
            console.log("error:", error)
        });
    }
}
export const nextAction = () => {
    return (dispatch, getState) => {
        const url = getState().core.next
        let lastIndex = url ? url.lastIndexOf('v2') : 0;
        const path = url.substring(lastIndex + 3, url.lenght)
        console.log("next", path)
        dispatch({ type: types.POKEDEX_LIST, payload: undefined })
        Api.get(path, null, null).then(
            dispatch({ type: types.LOADING, payload: true })
        ).then(res => {
            dispatch({ type: types.POKEDEX_LIST, payload: res.data.results })
            dispatch({ type: types.FORWARD_ACTION, payload: res.data.next })
            dispatch({ type: types.BACK_ACTION, payload: res.data.previous })
            dispatch({ type: types.LOADING, payload: false })

        }).catch(error => {
            dispatch({ type: types.LOADING, payload: false })
            console.log("error:", error)
            // errorClg(error, dispatch)
        });
    }
}
