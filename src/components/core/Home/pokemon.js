/**
 * @author Vanderson de Moura Vauruk
 * @date 05/06/2020
 */

import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import {
    Spinner
} from 'native-base'

import Api from '../../../services/util/api'
import { selectColorByType } from '../../../services/util/constants'
import PokemonType from './pokemonType'
import theme, { styles } from '../Theme';

const Pokemon: () => React$Node = (props) => {
    const [pokemon, setPokemon] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [colorCard, setColorCard] = useState("#ffffff")

    useEffect(() => {
        if (props.url) {
            let lastIndex = props.url ? props.url.lastIndexOf('v2/') : 0;
            const path = props.url.substring(lastIndex + 3, props.url.lenght)
            // console.log("path", path)

            Api.get(path).then(
                setLoading(true)
            ).then(res => {
                console.log("res", res.data)
                res.data.types.map((item, index) => {
                    if (index === 0) {
                        const type = selectColorByType(item.type.name)
                        setColorCard(type.color)
                    }
                })
                setPokemon(res.data)
                setLoading(false)
            }).catch(error => {
                console.log("error", error)
            });
        }
    }, []);

    padLeft = (number) => {
        let str = number.toString()
        return str.padStart(3, '0')
    }
    return (
        <View style={[stylesLocal.card, { borderColor: colorCard, backgroundColor: colorCard }]}>
            {loading &&
                <View style={{ alignContent: "center", marginTop: 30, alignItems: "center" }}>
                    <Spinner size={45} color='#f2f2f2' />
                </View>
            }
            {!loading && pokemon &&
                <View style={{ height: '100%' }} >
                    <TouchableOpacity
                        style={{ width: '100%', height: '100%' }}
                        onPress={() => Actions.pokemonStats({ pokemon: pokemon })}
                    >
                        <View style={[{
                            flexDirection: 'row',
                            height: '100%'
                            // padding: 10,
                        }]}>
                            <View style={{ flex: 0.5 }} >
                                <Text style={{ marginTop: 10, marginLeft: 10 }}>#{padLeft(pokemon.id)} </Text>
                                <Text style={[stylesLocal.namePokemon, { marginLeft: 10 }]}>{pokemon.name} </Text>
                                <View style={{ flexDirection: "row", marginTop: 10 }}>

                                    {
                                        pokemon.types.map((item, index) =>
                                            // <Text>{item.type.name}</Text>
                                            <PokemonType key={index} type={item.type.name} />
                                        )
                                    }
                                </View>
                            </View>
                            <View style={{ flex: 0.5 }}  >
                                <Image source={{ uri: pokemon.sprites.front_default }} style={{ height: 80, zIndex: 0, width: null }} />
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
            }
        </View >
    );
};

export default Pokemon;

const stylesLocal = StyleSheet.create({
    scrollView: {
        backgroundColor: theme.WHITE,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    card: {
        height: 115,
        borderColor: 'red',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 25,

    },
    namePokemon: {
        fontSize: theme.TEXT_20,
        color: theme.WHITE_COLOR,
        textTransform: "capitalize",
        fontWeight: '600'

    }
});
