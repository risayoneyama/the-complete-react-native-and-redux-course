import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyAAJZbyg9NYVvqWFHH3Y66tB1I_hJNHGSE',
			authDomain: 'manager-aa1b6.firebaseapp.com',
			databaseURL: 'https://manager-aa1b6.firebaseio.com',
			projectId: 'manager-aa1b6',
			storageBucket: 'manager-aa1b6.appspot.com',
			messagingSenderId: '951007894443'
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;
