import * as types from '../../actions/core/types';

const initialState = {
    addressByPostalCode: undefined,
    allowFontScaling: false,
    messageErrorModal: undefined //{code: 504,title: "erro", message: "mensagem " }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOADING_POSTAL_CODE: {
            //console.log("LOADING_STOP", typesCore)
            return { ...state, loadingPostalCode: action.payload };
        }
        case types.SHOW_MODAL_ERROR: {
            return { ...state, showErrorModal: action.payload };
        }
        case types.MESSAGE_ERROR_MODAL: {
            console.log("MESSAGE_ERROR_MODAL", action)
            return { ...state, messageErrorModal: action.payload };
        }
        default:
            return state;
    }
};