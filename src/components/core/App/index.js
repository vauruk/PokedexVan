/**
 * @author Vanderson de Moura Vauruk
 * @date 05/06/2020
 */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../services/store';


import {
	StyleSheet,
} from 'react-native';

import {
	Container,
	Text,
	Root, Content
} from 'native-base';

import MainRouter from '../Router'


const App: () => React$Node = () => {
	console.disableYellowBox = true;

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
				Register ee
            </Text>
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
