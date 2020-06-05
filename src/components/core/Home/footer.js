/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable semi */
/* eslint-disable no-lone-blocks */
/**
 * ©2019 - HealthYou
 * Created by João Belem Jr {junior.jb@gmail.com}
 * 27/dec/2019
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Alert,
} from 'react-native';

import { Icon } from 'native-base'
import theme, { styles } from '../Theme';

import { useSelector, useDispatch } from 'react-redux';

import { previousAction, nextAction } from '../../../services/actions/core'

//class HealthPointsFooter extends Component {
const Footer: () => React$Node = (props) => {

  const dispatch = useDispatch();
  const previous = useSelector((state) => state.core.previous);
  const next = useSelector((state) => state.core.next);

  handleNext = () => {
    dispatch(nextAction());
  }

  handlePrevious = () => {
    dispatch(previousAction());
  }

  return (
    <View style={stylesLocal.container}>
      <TouchableOpacity
        //disabled={previous == undefined}
        onPress={() => handlePrevious()}
        style={stylesLocal.item}
      >
        <Icon type="MaterialCommunityIcons" name="chevron-left" style={{ fontSize: 30, color: theme.BLACK }} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[stylesLocal.item, { width: '50%', backgroundColor: theme.HEALTH_POINTS_LIGHT_PURPLE }]}
      >
        <Text style={[stylesLocal.buttonText, { color: theme.BLACK }]}>
          {props.count} Pokemons
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        //disabled={next == undefined}
        style={stylesLocal.item}
        onPress={() => handleNext()}
      >
        <Icon type="MaterialCommunityIcons" name="chevron-right" style={{ fontSize: 30, color: theme.BLACK }} />
      </TouchableOpacity>
    </View>
  );
}

const stylesLocal = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.WHITE_COLOR,
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: 60,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 60,
  },
  buttonText: {
    fontSize: theme.TEXT_18,
    color: theme.WHITE_COLOR,
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 8,
  },
});

export default Footer;
