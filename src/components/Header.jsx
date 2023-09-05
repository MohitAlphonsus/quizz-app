export default function Header({ question, points, numOfQuestions, index }) {
	return (
		<header className="header">
			<progress className="progress" max="100" value="20" />
			<span>
				Question {index + 1} / {numOfQuestions}
			</span>
			<p>{question.question}</p>
			<span className="points">{points} 💰</span>
		</header>
	);
}
