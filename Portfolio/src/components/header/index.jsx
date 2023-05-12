// import "/index.css";

export default function Header() {
	return (
		<header className="header">
			<h1 className="header-title">My Portfolio</h1>
			<nav className="header-nav">
				{/* Add your navigation links here */}
				<a href="/">Home</a>
				<a href="/About">About</a>
				<a href="/Projects">Projects</a>
				<a href="/Contact">Contact</a>
				<a href="Resume">Resume</a>
			</nav>
		</header>
	);
}
