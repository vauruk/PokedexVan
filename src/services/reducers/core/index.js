/**
 * @author Vanderson de Moura Vauruk
 * @date 05/06/2020
 */
import * as types from '../../actions/core/types';

const initialState = {
    previous: undefined,
    next: undefined,
    loading: false,
    count: 0,
    color: undefined, //{code: 504,title: "erro", message: "mensagem " }
    pokedexList: undefined//[{ code: 504, title: "erro", message: "mensagem " }, { code: 544, title: "erro", message: "mensagem " }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING: {
            return { ...state, loading: action.payload };
        }
        case types.BACK_ACTION: {
            return { ...state, previous: action.payload };
        }
        case types.FORWARD_ACTION: {
            return { ...state, next: action.payload };
        }
        case types.POKEDEX_LIST: {
            return { ...state, pokedexList: action.payload };
        }
        case types.POKEDEX_COUNT: {
            return { ...state, count: action.payload };
        }
        case types.COLOR_SELECT: {
            return { ...state, color: action.payload };
        }
        default:
            return state;
    }
};