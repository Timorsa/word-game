import React from 'react';
import { Switch, Route, BrowserRouter as MainRouter } from 'react-router-dom';

import Game from '../components/Game';
import Intro from '../components/Intro';
import GameOver from '../components/GameOver';

const Router = () => {
	return (
		<MainRouter>
			<Switch>
				<Route exact path='/'>
					<Intro />
				</Route>
				<Route exact path='/game'>
					<Game />
				</Route>
				<Route exact path='/game-over'>
					<GameOver />
				</Route>
			</Switch>
		</MainRouter>
	);
};

export default Router;
