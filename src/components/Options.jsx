import Option from './Option';

export default function Options({ question, answer, dispatch }) {
	return (
		<div className="options">
			{question.options.map((option, index) => (
				<Option
					key={option}
					option={option}
					dispatch={dispatch}
					index={index}
					answer={answer}
					question={question}
				/>
			))}
		</div>
	);
}
