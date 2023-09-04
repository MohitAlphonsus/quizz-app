export default function Header({ points, numOfQuestions }) {
	return (
		<header className="header">
			<progress className="progress" max="100" value="20" />
			<span>Question x / {numOfQuestions}</span>
			<p>Which one is the World’s highest-altitude civilian airport?</p>
			<span className="points">{points} 💰</span>
		</header>
	);
}
