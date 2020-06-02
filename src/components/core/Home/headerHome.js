import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    Alert,

} from 'react-native';
import {
    Button,
    Icon
} from 'native-base'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import theme, { styles } from '../Theme'
//import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'

const HeaderHome: () => React$Node = () => {
    return (
        <View style={stylesLocal.container}>
            <TouchableOpacity
                hitSlop={{ top: 20, bottom: 20, left: 10, right: 10 }}
                style={stylesLocal.badgeButton}
                onPress={() => Actions.notifications()}
            >
                <Icon type="MaterialCommunityIcons" name="format-list-bulleted-square" />
                {/* <IconMaterialCommunity  name="alarm" style={{ fontSize: 30, color: theme.WHITE_COLOR }} /> */}
                <View style={stylesLocal.badgeContainer}>
                    <Text style={stylesLocal.badgeText}>{20}</Text>
                </View>
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
        width: 40,
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

const mapStateToProps = (state) => {
    return {
        // userId: state.auth.currentUser.userId,
        // partners: state.healthpoints.partners,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHome);
