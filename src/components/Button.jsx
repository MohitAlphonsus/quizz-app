export default function Button({ children, classes = '', onClick }) {
	return (
		<button className={`btn ${classes}`} onClick={onClick}>
			{children}
		</button>
	);
}
