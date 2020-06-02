/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../services/store';
// import Loading from '../Loading'
// import ModalError from '../ModalError'

// import configureStore from '../../../redux/store';
// const store = configureStore()

//import { MenuProvider } from 'react-native-popup-menu';

import { Router, Actions } from 'react-native-router-flux';

import {
	Button,
	Platform,
	StyleSheet,
	NativeModules,
	Alert
} from 'react-native';

import {
	Container,
	Text,
	Root, Content
} from 'native-base';

import MainRouter from '../Router'

const App: () => React$Node = () => {
	//console.disableYellowBox = true;
	// persistor.purge()
	return (
		<Root>
			<Provider store={store}>
				{/* <Loading /> */}
				{/* <ModalError/> */}
				<MainRouter />
				{/* <Register2 /> */}
			</Provider>
		</Root>
	);
}


export default App;

const Register2 = () => (
	<Container>
		<Content>
			<Text style={styles.welcome}>
				Register
            </Text>
		</Content>
	</Container>
)
const Home2 = () => (
	<Container>
		<Content>
			<Text style={styles.welcome}>
				HOME
             </Text>
			<Button
				title="Votltar"
				color="#f194ff"
				onPress={() => Actions.pop()}
			/>
		</Content>
	</Container>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//  ...StyleSheet.absoluteFillObject,
		justifyContent: 'flex-end',
		//alignItems: 'center',
		// backgroundColor: '#F5FCFF',
	},
	welcome: {
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
