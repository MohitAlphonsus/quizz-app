import Button from './Button';

export default function FinishScreen({ points, dispatch }) {
	return (
		<>
			<div className="finish">
				<span>Quizz Completed</span>
				<p>
					😀 Hoorey!! You won <strong>{points}</strong> coins 💰
				</p>
			</div>
			<Button classes="mg-at" onClick={() => dispatch({ type: 'restart' })}>
				Reset
			</Button>
		</>
	);
}
