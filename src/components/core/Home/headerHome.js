/**
 * @author Vanderson de Moura Vauruk
 */
import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,

} from 'react-native';
import {
    Icon
} from 'native-base'
import theme, { styles } from '../Theme'

const HeaderHome: () => React$Node = () => {
    return (
        <View style={stylesLocal.container}>
            <TouchableOpacity
                hitSlop={{ top: 20, bottom: 20, left: 10, right: 10 }}
            >
                <Icon type="MaterialCommunityIcons" name="view-comfy" />
            </TouchableOpacity>
            <TouchableOpacity
                hitSlop={{ top: 20, bottom: 20, left: 10, right: 10 }}
                style={{ marginLeft: 15 }}
            >
                <Icon type="MaterialCommunityIcons" name="sort" style={{ fontSize: 25 }} />
            </TouchableOpacity>
            <TouchableOpacity
                hitSlop={{ top: 20, bottom: 20, left: 10, right: 10 }}
                style={{ marginLeft: 15, marginRight: 20 }}
            >
                <Icon type="MaterialCommunityIcons" name="tune" style={{ fontSize: 25 }} />
            </TouchableOpacity>

        </View>
    );
}
const stylesLocal = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 10,
        //width: 40,
    },
    badgeContainer: {
        position: 'absolute',
        top: 10,
        left: 12,
        backgroundColor: theme.WHITE_COLOR,
        borderRadius: 15,
        width: 25,
        height: 25,
        padding: 1,
        justifyContent: 'center',
    },
    badgeText: {
        textAlign: 'center',
        fontSize: theme.TEXT_12,
        color: theme.PRIMARY_COLOR,
    },
});

export default HeaderHome;
