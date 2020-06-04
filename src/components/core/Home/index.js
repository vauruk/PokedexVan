/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    //   SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import { Icon, Input, Item } from 'native-base'

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


import theme, { styles } from '../Theme';

import PokedexList from './pokedexList'

type Props = {};
class Home extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ height: '100%' }}>
                <ScrollView
                    //contentInsetAdjustmentBehavior="automatic"
                    //contentInsetAdjustmentBehavior="scrollableAxes"
                    style={stylesLocal.scrollView}>
                    <View>
                        <View style={stylesLocal.sectionContainer}>
                            <Text style={stylesLocal.sectionTitle}>Pokédex</Text>
                            <Text style={stylesLocal.sectionDescription}>Search for Pokémon by name or using the Nactional Pokédex number</Text>
                        </View>
                    </View>
                    <View
                        style={[
                            stylesLocal.sectionContainer,
                            {
                                //  height: 40,
                                margin: 20,
                                backgroundColor: '#F2F2F2',
                                paddingLeft: 20,
                                // padding: 10,
                                borderRadius: 10,
                            },
                        ]}>
                        <View
                            style={[
                                {
                                    flexDirection: 'row',
                                    alignContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}>
                            <View style={{ flex: 0.11 }}>
                                <Icon name="ios-search" style={{ fontSize: 20, color: theme.GREY_1 }} />
                            </View>
                            <View style={{ flex: 0.89 }}>
                                <Input
                                    //value={count + ""}
                                    placeholderTextColor={theme.GREY_1}
                                    style={{
                                        paddingTop: 25,
                                        paddingRight: 25,
                                        paddingBottom: 25,
                                        fontSize: theme.TEXT_10,
                                        // color: theme.PRIMARY_COLOR,
                                        // fontWeight: "bold"
                                    }}
                                    placeholder={'What Pokémon are you looking for?'}
                                    autoCapitalize="sentences"
                                    onChangeText={(token) => this.setState({ token })}
                                    onSubmitEditing={() =>
                                        this.handleSetPhysicalToken(this.state.token)
                                    }
                                />
                            </View>
                        </View>
                    </View>
                    <View style={stylesLocal.sectionContainer}>
                        <PokedexList idNome={"dsdsadas"} />
                    </View>
                </ScrollView>
            </View>
        );
    }
};

const mapStateToProps = (state) => ({
    // sadas: console.log("state", state),
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);

const stylesLocal = StyleSheet.create({
    scrollView: {
        backgroundColor: theme.WHITE,
        height: '100%',
        // backgroundColor: 'red'
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: theme.TEXT_20,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: theme.TEXT_10,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});
