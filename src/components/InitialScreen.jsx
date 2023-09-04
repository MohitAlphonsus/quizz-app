import Button from './Button';

export default function InitialScreen({ numOfQuestions, dispatch }) {
	return (
		<div className="initial">
			<h1>Super Quizz</h1>
			<p>
				You have got {numOfQuestions} questions - start your quizz to know your
				general knowledge
			</p>
			<Button
				classes="mg-tp-md"
				onClick={() => dispatch({ type: 'startQuizz' })}
			>
				Start Quizz
			</Button>
		</div>
	);
}
