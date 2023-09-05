import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import MainEl from './components/MainEl';
import Options from './components/Options';
import Button from './components/Button';
import InitialScreen from './components/InitialScreen';
import Loading from './components/Loading';
import FinishScreen from './components/FinishScreen';

const initialState = {
	questions: [],
	status: 'loading',
	points: 0,
	index: 0,
	answer: null,
};

function reducer(state, action) {
	switch (action.type) {
		case 'dataFetchedSuccess':
			return { ...state, questions: action.payload, status: 'ready' };
		case 'startQuizz':
			return { ...state, status: 'active' };
		case 'newAnswer':
			const question = state.questions.at(state.index);
			return {
				...state,
				answer: action.payload,
				points:
					action.payload === question.correctOption
						? state.points + question.points
						: state.points,
			};
		case 'nextQuestion':
			return { ...state, index: state.index + 1, answer: null };
		case 'finish':
			return { ...state, status: 'finished' };
		case 'restart':
			return { ...initialState, questions: state.questions, status: 'ready' };
		default:
			throw new Error('Action Unkonwn');
	}
}

function App() {
	const [{ questions, status, points, index, answer }, dispatch] = useReducer(
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
				<Header
					question={questions[index]}
					points={points}
					numOfQuestions={numOfQuestions}
					index={index}
				/>
			)}
			<MainEl>
				{status === 'loading' && <Loading />}
				{status === 'ready' && (
					<InitialScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
				)}
				{status === 'active' && (
					<>
						<Options
							question={questions[index]}
							answer={answer}
							dispatch={dispatch}
						/>
						{index < numOfQuestions - 1 && (
							<Button
								classes="mg-tp-sm mg-lt"
								onClick={() => dispatch({ type: 'nextQuestion' })}
							>
								Next
							</Button>
						)}
						{index === numOfQuestions - 1 && (
							<Button
								classes="mg-tp-sm mg-lt"
								onClick={() => dispatch({ type: 'finish' })}
							>
								Finish
							</Button>
						)}
					</>
				)}
				{status === 'finished' && (
					<FinishScreen points={points} dispatch={dispatch} />
				)}
			</MainEl>
		</div>
	);
}

export default App;
