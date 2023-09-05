export default function Option({ option, dispatch, index, answer, question }) {
	const hasAnswered = answer !== null;
	return (
		<button
			className={`option ${answer === index ? 'answer' : ''} ${
				hasAnswered
					? index === question.correctOption
						? 'correct'
						: 'wrong'
					: ''
			}`}
			disabled={answer !== null}
			onClick={() => dispatch({ type: 'newAnswer', payload: index })}
		>
			{option}
		</button>
	);
}
