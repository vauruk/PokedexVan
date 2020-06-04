/* eslint-disable no-console */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image, Animated, Easing, StyleSheet, Platform, Text, TextInput } from 'react-native';
import { Scene, Router, Actions, Drawer, Tabs, Stack, Lightbox } from 'react-native-router-flux';
import {
    Button,
    Icon
    // Container, Content
} from 'native-base'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import HeaderHome from '../Home/headerHome'
// import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from '../Home'
import theme, { styles } from '../Theme'

//const iconMenu = (<IconMaterialCommunity  name="menu" style={{ fontSize: 30, color: theme.WHITE_COLOR }} />);
const iconMenu = (<Icon type="FontAwesome" name="home" style={{ fontSize: 30, color: theme.WHITE_COLOR }} />);

type Props = {};
class MainRouter extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Scene key="root"
                    hideNavBar
                    hideTabBar
                    panHandlers={null}>
                    {/* Cenas do fluxo autenticado. */}
                    <Drawer
                        hideNavBar
                        key="drawer"
                        onExit={() => {
                            console.log('Drawer closed');
                        }}
                        onEnter={() => {
                            console.log('Drawer opened');
                        }}
                        drawerIcon={iconMenu}
                        drawerWidth={300}
                        //contentComponent={SideBar}
                        drawerPosition="left"
                        navTransparent
                    >
                        {/* Você deixa as cenas dentro de uma mesma stack para orientar a navegação */}
                        <Stack
                            key="main"
                            panHandlers={null}
                            {...sceneConfig}
                            //initial={this.props.isAuthenticated} // Define se esta cena é a inicial ou não true / false
                            initial={true} // Debug: Define como true manualmente para ir direto para esta cena.
                        >

                            {/* demais cenas autenticadas devem ser inseridas aqui */}
                            <Scene key="home"
                                //initial
                                component={Home}
                                renderTitle={<Text style={styles.headerTitle}>Home</Text>}
                                navigationBarStyle={stylesLocal.navBar}
                                hideNavBar={false}
                                onRight={() => console.log('Pressed')}
                                renderRightButton={<HeaderHome />}
                            />

                        </Stack>
                        {/* this.selectEditReminder() */}
                    </Drawer>

                </Scene>
            </Router>
        );
    }
}

function areEqual() {
    const len = arguments.length;
    for (let i = 1; i < len; i++) {
        console.log(`Analizando ${arguments[i]}`);
        if (arguments[i] === null || arguments[i] !== arguments[i - 1])
            return false;
    }
    return true;
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        // fetchFooterAds
    }, dispatch);

const mapStateToProps = (state) => ({
    // sadas: console.log("state", state),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainRouter);

const stylesLocal = StyleSheet.create({
    cardStyle: {
        //backgroundColor: 'black' //Define the color of scene background
    },
    headerTitle: {
        color: '#FFFFFF',
        fontSize: theme.TEXT_12,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    navBar: {
        backgroundColor: theme.WHITE,
        //  height: 80,
        borderBottomWidth: 0,
    },
    headerLogoImage: {
        resizeMode: 'contain',
        height: RFValue(28),
    },
    tabBarStyle: {
        height: RFValue(60),
        backgroundColor: '#3A3A3A',
        borderColor: 'transparent',
    },

});

const sceneConfig = {
    headerTitle: {
        color: '#00FF00',
        textAlign: 'left',
        alignSelf: 'flex-start',
        padding: 0,
    },
    tabBarStyle: {
        height: 65,
        backgroundColor: '#FFFFFF',
        borderColor: 'transparent',
    },
    tabBarIcon: {
        resizeMode: 'contain',
        height: 22,
    },
    dotNotification: {
        position: 'absolute',
        top: -10,
        alignSelf: 'center',
        resizeMode: 'contain',
        height: 8,
    },
};
