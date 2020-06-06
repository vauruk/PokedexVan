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
} from 'react-native';
import { selectColorByType } from '../../../services/util/constants'
import PokemonType from './pokemonType'
import Stat from './stat'
import theme, { styles } from '../Theme'
import _ from 'lodash'


const PokemonStats: () => React$Node = (props) => {

    const [colorCard, setColorCard] = useState(undefined)
    const [totalStats, setTotalStats] = useState({ base_stat: 0, stat: { name: 'Total' } })

    useEffect(() => {
        const pokemon = props.pokemon
        pokemon.types.map((item, index) => {
            if (index === 0) {
                const type = selectColorByType(item.type.name)
                setColorCard(type.color)
            }
        })

        let total = 0
        pokemon.stats.map((item, index) => {
            total += item.base_stat
        })
        let value = totalStats
        _.set(value, 'base_stat', total)
        setTotalStats(value)

    }, []);

    const pokemon = props.pokemon
    return (
        <View style={{ height: '100%', backgroundColor: colorCard }}>
            <View style={{ height: 300 }}>
                <View style={{ marginTop: 30, alignContent: "center", alignItems: "center", flex: 1, flexDirection: 'row' }}>
                    <Text style={[stylesLocal.namePokemon, { fontSize: theme.TEXT_100, textTransform: "uppercase", opacity: 0.2 }]}>
                        {pokemon.name}
                    </Text>
                </View>

                <View style={[{
                    flexDirection: 'row',
                    height: '35%',
                    //marginTop: 20
                }]}>
                    <View style={{ flex: 0.3 }}  >
                        <Image source={{ uri: pokemon.sprites.front_default }} style={{ height: 100, width: null, flex: 1 }} />
                    </View>
                    <View style={{ flex: 0.7 }} >
                        <Text style={{ marginTop: 10, marginLeft: 10 }}>#{padLeft(pokemon.id)} </Text>
                        <Text style={[stylesLocal.namePokemon, { marginLeft: 10 }]}>{pokemon.name} </Text>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            {
                                pokemon.types.map((item, index) =>
                                    <PokemonType key={index} type={item.type.name} colorCard={colorCard} />
                                )
                            }
                        </View>
                    </View>
                </View>
                <View>
                    <View style={[{
                        flexDirection: 'row',
                        // height: '35%',
                        //marginTop: -60
                        marginTop: 50
                        //  paddingBottom: 10
                    }]}>
                        <View style={[stylesLocal.alignText, { flex: 0.33 }]}  >
                            <Text style={[stylesLocal.textStats, { marginLeft: 10 }]}>About</Text>
                        </View>
                        <View style={[stylesLocal.alignText, { flex: 0.33 }]}  >
                            <Text style={[stylesLocal.textStats, { marginLeft: 10, fontWeight: "bold" }]}>Stats</Text>
                        </View>
                        <View style={[stylesLocal.alignText, { flex: 0.33 }]} >
                            <Text style={[stylesLocal.textStats, { marginLeft: 10 }]}>Evolution</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ height: '100%', backgroundColor: theme.WHITE_COLOR, borderRadius: 30, marginTop: 15 }}>
                <View style={{ marginLeft: 40, marginTop: 30 }}>
                    <Text style={{ marginBottom: 20, color: colorCard, fontWeight: "bold" }}>Base Stats</Text>
                    {
                        pokemon.stats.map((item, index) =>
                            <Stat key={index} showBar={true} item={item} colorCard={colorCard} />
                        )
                    }
                    <Stat item={totalStats} showBar={false} colorCard={colorCard} />
                    <Text style={{ marginTop: 30, color: theme.GREY_1 }}>The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.</Text>
                </View>
            </View>
        </View>
    );
};

export default PokemonStats;

const stylesLocal = StyleSheet.create({
    namePokemon: {
        fontSize: theme.TEXT_20,
        color: theme.WHITE_COLOR,
        textTransform: "capitalize",
        fontWeight: '600'
    },
    textStats: {
        color: theme.WHITE_COLOR,
    },
    alignText: {
        alignContent: "center", alignItems: "center"
    }
});
