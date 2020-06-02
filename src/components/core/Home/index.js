/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Icon, Input, Item
} from 'native-base'

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import theme, { styles } from '../Theme'

const Home: () => React$Node = () => {

    // Declara uma nova variável de state, que chamaremos de "count"
    const [count, setCount] = useState(1000);

    useEffect(() => {
        console.log("Teste useefect")
    });

    return (
        <>
            <SafeAreaView>
        <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View>
                        <View style={stylesLocal.sectionContainer}>
                            <Text style={stylesLocal.sectionTitle}>Pokédex</Text>
                            <Text style={stylesLocal.sectionDescription}>
                                xxx
                            </Text>
                        </View>
                    </View>
                    <View style={[stylesLocal.sectionContainer, {
                        height: 40,
                        margin: 20,
                        backgroundColor: '#F2F2F2',
                        paddingLeft: 10,
                        //borderWidth: 1,
                        borderRadius: 10,
                       // borderColor: theme.PRIMARY_COLOR,
                    }]}>
                        <View style={[{
                            flexDirection: 'row',
                            alignContent: "center",
                            alignItems: "center",
                            
                            //padding: 10
                        }]}>
                            <View style={{ flex: 0.11 }}>
                                <Icon name="ios-search" />
                            </View>
                            <View style={{ flex: 0.89 }}>
                                <Input
                                    //value={this.state.token}
                                    placeholderTextColor={theme.PRIMARY_COLOR}
                                    style={{
                                        padding: 20
                                        // fontSize: theme.TEXT_14,
                                        // color: theme.PRIMARY_COLOR,
                                        // fontWeight: "bold"

                                    }}
                                    placeholder={'VALOR'}
                                    autoCapitalize="sentences"
                                    onChangeText={(token) => this.setState({ token })}
                                    onSubmitEditing={() => this.handleSetPhysicalToken(this.state.token)} />
                            </View>
                        </View>


                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const stylesLocal = StyleSheet.create({
    scrollView: {
        backgroundColor: theme.WHITE,
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
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
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

export default Home;
