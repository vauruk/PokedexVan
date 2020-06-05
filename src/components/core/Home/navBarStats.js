/**
 * @author Vanderson de Moura Vauruk
 */
import React from 'react';
import { useSelector } from 'react-redux';
import {
    View,
} from 'react-native';
const NavBarStats: () => React$Node = (props) => {
    const [color, setColor] = useSelector((state) => state.core.color);
    return (
        <View style={{ backgroundColor: color }}></View>
    );
};
export default NavBarStats;
