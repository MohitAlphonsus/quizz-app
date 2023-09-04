import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import MainEl from './components/MainEl';
import Options from './components/Options';
import Button from './components/Button';
import InitialScreen from './components/InitialScreen';
import Loading from './components/Loading';

const initialState = {
	questions: [],
	status: 'loading',
	points: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case 'dataFetchedSuccess':
			return { ...state, questions: action.payload, status: 'success' };
		case 'startQuizz':
			return { ...state, status: 'active' };
		default:
			throw new Error('Action Unkonwn');
	}
}

function App() {
	const [{ questions, status, points }, dispatch] = useReducer(
		reducer,
		initialState,
	);
	const numOfQuestions = questions.length;

	useEffect(function () {
		fetch('http://localhost:3000/questions')
			.then(res => res.json())
			.then(data => dispatch({ type: 'dataFetchedSuccess', payload: data }))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="app">
			{status === 'active' && (
				<Header points={points} numOfQuestions={numOfQuestions} />
			)}
			<MainEl>
				{status === 'loading' && <Loading />}
				{status === 'success' && (
					<InitialScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
				)}
				{status === 'active' && (
					<>
						<Options />
						<Button classes="mg-tp-sm mg-lt">Next</Button>
					</>
				)}
			</MainEl>
		</div>
	);
}

export default App;
