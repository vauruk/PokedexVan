/**
 * @author Vanderson de Moura Vauruk
 */
import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import Pokemon from './pokemon'

import { pokemonListAction } from '../../../services/actions/core'

import theme, { styles } from '../Theme';

import _ from 'lodash'


const PokedexList: () => React$Node = (props) => {
    const dispatch = useDispatch();

    const pokedexList = useSelector((state) => state.core.pokedexList);

    useEffect(() => {
        dispatch(pokemonListAction());
    }, []);

    //console.log("pokedexList x", pokedexList)

    return (
        <View>
            {
                pokedexList && pokedexList.map((item, index) =>
                    <Pokemon key={index} url={item.url} />
                )
            }
        </View>
    );
};

export default PokedexList;

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
