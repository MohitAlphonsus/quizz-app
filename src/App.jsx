function App() {
	return (
		<div className="app">
			<header className="header">
				<progress className="progress" max="100" value="20" />
				<span>Question x / y</span>
				<p>Which one is the World’s highest-altitude civilian airport?</p>
				<span className="points">20 💰</span>
			</header>
			<main className="main">
				<div className="options">
					<div className="option">
						<span>A</span>
						<p>Daocheng Yading Airport, China</p>
					</div>
					<div className="option wrong">
						<span>B</span>
						<p>Kushok Bakula Rimpochhe Airport, Leh ggrgr frfrf</p>
					</div>
					<div className="option">
						<span>B</span>
						<p>Kushok Bakula Rimpochhe Airport, Leh</p>
					</div>
					<div className="option">
						<span>B</span>
						<p>Kushok Bakula Rimpochhe Airport, Leh</p>
					</div>
				</div>
				<button className="btn btn-mg">Next</button>
			</main>
		</div>
	);
}

export default App;
