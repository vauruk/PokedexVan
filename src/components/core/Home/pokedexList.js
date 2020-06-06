/**
 * @author Vanderson de Moura Vauruk
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
//import { createSelector } from 'reselect'

import _ from 'lodash'

// const selectPokomonList = createSelector(
//     state => state.core.pokedexList,
//     // todos => todos.filter(todo => todo.isDone).length
// )

const PokedexList: () => React$Node = (props) => {
    const dispatch = useDispatch();
    // const [pokedexList, setPokedexList] = useState(useSelector((state) => state.core.pokedexList));

    const pokedexList = useSelector((state) => state.core.pokedexList);

    useEffect(() => {
        dispatch(pokemonListAction());
    }, []);

    console.log("pokedexList x", pokedexList)

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

const mapStateToProps = (state) => ({
    // sadas: console.log("state", state),
    pokedexList: state.core.pokedexList
});

// const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(PokedexList);
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
