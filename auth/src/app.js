import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
	state = { loggedIn: null };

	componentWillMount() {
	firebase.initializeApp({
    	apiKey: 'AIzaSyB5lGTSWW0WnCKSd_pzDxasM1YIZHF_DrU',
    	authDomain: 'auth-4ede8.firebaseapp.com',
    	databaseURL: 'https://auth-4ede8.firebaseio.com',
    	projectId: 'auth-4ede8',
    	storageBucket: 'auth-4ede8.appspot.com',
    	messagingSenderId: '1048778912382'
  		});

		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.setState({ loggedIn: true });
			}
			else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {

		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}

	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;