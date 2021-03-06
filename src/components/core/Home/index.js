/**
 * @author Vanderson de Moura Vauruk
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import { Icon, Input, Spinner } from 'native-base'

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


import theme, { styles } from '../Theme';

import PokedexList from './pokedexList'
import Footer from './footer'
import { useSelector, useDispatch, shallowEqual } from 'react-redux';


import { pokemonListAction } from '../../../services/actions/core'

const Home: () => React$Node = (props) => {
    const [textToSearch, setTextToSearch] = useState(undefined)
    // const loading = useSelector(state => state.core.loading)
    // const count = useSelector(state => state.core.count)

    const { count, loading } = useSelector(state => ({
        count: state.core.count,
        loading: state.core.loading,
    }), shallowEqual);

    const dispatch = useDispatch()

    searchPokemon = (textToSearch) => {
        console.log("searchPokemon")
        setTextToSearch(textToSearch)
        dispatch(pokemonListAction(textToSearch))
    }

    return (
        <View style={{ height: '100%' }}>
            <ScrollView
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
                            marginLeft: 20,
                            marginRight: 20,
                            backgroundColor: '#F2F2F2',
                            paddingLeft: 20,
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
                                value={textToSearch}
                                placeholderTextColor={theme.GREY_1}
                                style={{
                                    fontSize: theme.TEXT_10,
                                    color: theme.BLACK,
                                    // fontWeight: "bold"
                                }}
                                placeholder={'What Pokémon are you looking for?'}
                                autoCapitalize="sentences"
                                onChangeText={(text) => searchPokemon(text)}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ height: 30 }}>
                    {loading &&
                        <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                            <Spinner size={40} color='#8bd675' />
                        </View>}
                </View>
                <View style={[stylesLocal.sectionContainer, { marginTop: 10 }]}>
                    <PokedexList idNome={"dsdsadas"} />
                </View>
            </ScrollView>
            <Footer count={count} />
        </View>
    );
};


export default Home;


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
