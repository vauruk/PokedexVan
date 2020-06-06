/**
 * @author Vanderson de Moura Vauruk
 * @date 05/06/2020
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import theme, { styles } from '../Theme';

import * as Progress from 'react-native-progress';

const Stat: () => React$Node = (props) => {

    selectTextReplace = (key) => {
        switch (key) {
            case 'special-attack':
                return "Sp. Atk"
            case 'special-defense':
                return "Sp. Def"
            default:
                return key;
        }
    }
    const item = props.item

    return (
        <View style={[{
            flexDirection: 'row',
        }]}>
            <View style={[{ flex: 0.15 }]}>
                <Text style={[{ fontWeight: "bold", fontSize: theme.TEXT_8, textTransform: "capitalize" }]}>
                    {selectTextReplace(item.stat.name)}
                </Text>
            </View>
            <View style={[{ flex: 0.10, }]}>
                <Text style={[{ fontSize: theme.TEXT_10 }]}>{item.base_stat}</Text>
            </View>
            <View style={[{ flex: 0.50, justifyContent: "center" }]}>
                {
                    props.showBar &&
                    <Progress.Bar progress={item.base_stat / 180} width={180} borderWidth={0} color={props.colorCard} />
                }
            </View>
            <View style={[{ flex: 0.10 }]}>
                <Text></Text>
            </View>
            <View style={[{ flex: 0.10 }]}>
                <Text></Text>
            </View>
        </View>
    );
};
export default Stat;

const stylesLocal = StyleSheet.create({
    tag: {
    }
});
