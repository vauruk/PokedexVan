/**
 * @author Vanderson de Moura Vauruk
 * @date 05/06/2020
 */

import { Dimensions, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const PRIMARY_COLOR = '#5c4696'
const SECONDARY_COLOR = '#C8D419'
const WHITE_COLOR = '#ffffff'
const BLACK = '#000000'
const GREY_1 = '#585858'


/*  FONT SIZE */
const TEXT_8 = RFValue(8, 580)//Platform.OS === 'ios' ? RFValue(12, 580) : RFValue(13, 580)
const TEXT_10 = RFValue(10, 580)//Platform.OS === 'ios' ? RFValue(12, 580) : RFValue(13, 580)
const TEXT_12 = RFValue(12, 580)//Platform.OS === 'ios' ? RFValue(12, 580) : RFValue(13, 580)
const TEXT_13 = RFValue(13, 580)//Platform.OS === 'ios' ? RFValue(12, 580) : RFValue(13, 580)
const TEXT_14 = RFValue(14, 580) //Platform.OS === 'ios' ? RFValue(14, 580) : RFValue(15, 580)
const TEXT_16 = RFValue(16, 580) //Platform.OS === 'ios' ? RFValue(16, 580) : RFValue(17, 580)
const TEXT_18 = RFValue(18, 580)//Platform.OS === 'ios' ? RFValue(18, 580) : RFValue(19, 580)
//const TEXT_18 = Platform.OS === 'ios' ? RFValue(18) : RFValue(19)
const TEXT_20 = RFValue(20, 580)//Platform.OS === 'ios' ? RFValue(20, 580) : RFValue(21, 580)
const TEXT_24 = RFValue(24, 580)//Platform.OS === 'ios' ? RFValue(24, 580) : RFValue(25, 580)
const TEXT_26 = RFValue(26, 580)//Platform.OS === 'ios' ? RFValue(26, 580) : RFValue(27, 580)
const TEXT_30 = RFValue(30, 580) //Platform.OS === 'ios' ? RFValue(30, 580) : RFValue(31, 580)
const TEXT_35 = RFValue(35, 580) //Platform.OS === 'ios' ? RFValue(30, 580) : RFValue(31, 580)
const TEXT_50 = RFValue(50, 580)// Platform.OS === 'ios' ? RFValue(50, 580) : RFValue(51, 580)
const TEXT_100 = RFValue(100, 580)// Platform.OS === 'ios' ? RFValue(50, 580) : RFValue(51, 580)

const PADDING_DEFAULT = RFValue(20)
const PADDING_10 = RFValue(10)
const PADDING_15 = RFValue(15)
const PADDING_20 = RFValue(20)
const PADDING_25 = RFValue(25)
const PADDING_30 = RFValue(25)

/* MARGINS */
const MARGIN_10 = RFValue(10)

export default {
    /* COLORS */
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    WHITE_COLOR,
    BLACK,
    GREY_1,
    TEXT_8,
    TEXT_12,
    TEXT_13,
    TEXT_10,
    TEXT_14,
    TEXT_16,
    TEXT_18,
    TEXT_20,
    TEXT_24,
    TEXT_26,
    TEXT_30,
    TEXT_50,
    TEXT_100,
    PADDING_DEFAULT,
    PADDING_10,
    PADDING_15,
    PADDING_20,
    PADDING_25,
    PADDING_30,

    MARGIN_10,
};


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: TEXT_14,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    wrapperPopup: {
        width: '90%',
        borderRadius: 10,
        borderColor: PRIMARY_COLOR,
        borderWidth: 2,
        paddingBottom: 20,
        position: 'relative',
    },
    bodyPopup: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    centerGrid: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftGrid: {
        flex: 1,
        justifyContent: 'center',
    },
    modalHeaderLight: {
        padding: 18,
        textTransform: 'capitalize',
        textAlign: 'center',
        borderBottomColor: PRIMARY_COLOR,
        borderBottomWidth: 1,
        fontSize: TEXT_20,
        color: PRIMARY_COLOR
    },
    buttonDefault: {
        borderRadius: 50,
        height: 50,
        backgroundColor: PRIMARY_COLOR,
    },
    buttonConfirm: {
        //marginTop: 50,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 50,
        color: PRIMARY_COLOR,
        height: 50,
        marginLeft: '15%',
        marginRight: '15%',
    },
    textEmpty: {
        marginTop: 20,
        // color: DARK_COLOR,
        fontSize: TEXT_24,
    },
    textDefault: {
        color: PRIMARY_COLOR
    },
    buttonCancel: {
        borderRadius: 50,
        height: 50,
        marginLeft: '15%',
        marginRight: '15%',
    },
    buttonDisable: {
        borderRadius: 50,
        height: 50,
        //  marginTop: 50,
        marginLeft: '15%',
        marginRight: '15%',
    },

});

