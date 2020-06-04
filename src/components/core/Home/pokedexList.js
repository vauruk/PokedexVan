/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    // SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';

import {
    Icon,
    Input,
    Item
} from 'native-base'
import { useSelector, useDispatch } from 'react-redux';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { pokedexListAction } from '../../../services/actions/core'

import theme, { styles } from '../Theme';


// type Props = {};
// class PokedexList extends Component<Props> {
//     constructor(props) {
//         super(props);
//     }
const PokedexList: () => React$Node = (props) => {
    const dispatch = useDispatch(); // The older mapDispatchToProps
    const pokedexList = useSelector((state) => state.core.pokedexList); //The older mapStateToProps
    console.log("pokedexList", pokedexList, props.idNome);

    useEffect(() => {
        dispatch(pokedexListAction()); //The older componentDidMount
    }, []);


    //render() {
    //  const { pokedexList } = this.props
    return (
        <View>
            {
                pokedexList && pokedexList.map((item, index) =>
                    <Text key={index}>{item.name}</Text>
                )
            }
        </View>
    );
    // }
};

const mapStateToProps = (state) => ({
    // sadas: console.log("state", state),
    pokedexList: state.core.pokedexList
});

const mapDispatchToProps = dispatch => bindActionCreators({
    pokedexListAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PokedexList);

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
