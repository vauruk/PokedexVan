/**
 * @author Vanderson de Moura Vauruk
 * @date 05/06/2020
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text } from 'react-native';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import {
    Icon
} from 'native-base'
import { RFValue } from 'react-native-responsive-fontsize';
import HeaderHome from '../Home/headerHome'
import PokemonStats from '../Home/pokemonStats'

import Home from '../Home'
import theme, { styles } from '../Theme'

const iconMenu = (<Icon type="FontAwesome" name="home" style={{ fontSize: 30, color: theme.WHITE_COLOR }} />);
const arrowLeft = <Icon type="MaterialCommunityIcons" name="chevron-left" style={{ fontSize: 30, color: theme.BLACK }} />;

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
                    <Stack
                        key="main"
                        panHandlers={null}
                        {...sceneConfig}
                        initial={true}
                    >
                        <Scene key="home"
                            component={Home}
                            renderTitle={<Text style={styles.headerTitle}>Home</Text>}
                            navigationBarStyle={stylesLocal.navBar}
                            hideNavBar={false}
                            onRight={() => console.log('Pressed')}
                            renderRightButton={<HeaderHome />}
                        />
                        <Scene key="pokemonStats"
                            component={PokemonStats}
                            onLeft={() => Actions.pop()}
                            leftTitle={arrowLeft}
                            //navBar={NavBarStats}
                            navTransparent={true}
                            navigationBarStyle={[stylesLocal.navBar]}
                        />

                    </Stack>

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
    }, dispatch);

const mapStateToProps = (state) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainRouter);

const stylesLocal = StyleSheet.create({
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
