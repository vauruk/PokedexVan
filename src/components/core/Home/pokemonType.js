/**
 * @author Vanderson de Moura Vauruk
 * @date 05/06/2020
 */
import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native';
import { selectColorByType } from '../../../services/util/constants'
import theme, { styles } from '../Theme';

const PokemonType: () => React$Node = (props) => {

    const type = selectColorByType(props.type)
    return (
        <View style={[stylesLocal.tag, { backgroundColor: type.color }]}>
            <View style={[{
                flexDirection: 'row',
            }]}>
                <View style={{ flex: 0.17, padding: 1, alignContent: "center", alignItems: "center" }} >
                    {/* <Icon type="MaterialCommunityIcons" name="flash" style={{ fontSize: 15, color: theme.WHITE_COLOR }} /> */}
                    <Image source={type.image} height={12} style={{ margin: 3, marginLeft: 10, height: 12, width: 12 }} />
                </View>

                <View style={{ flex: 0.83 }}  >
                    <Text style={{ marginLeft: 5, color: theme.WHITE_COLOR, textTransform: "capitalize" }}>{props.type}</Text>
                </View>
            </View>
        </View>
    );
};
export default PokemonType;

const stylesLocal = StyleSheet.create({
    tag: {
        width: 70,
        borderRadius: 2,
        marginLeft: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#ffffff',
        shadowOpacity: 0.9,
    }
});
