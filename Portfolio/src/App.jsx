import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	let Component;
	switch (window.location.pathname) {
		case "/":
			Component = Main;
			break;
		case "/About":
			Component = About;
			break;
		case "/Projects":
			Component = Projects;
			break;
		case "/Contact":
			Component = Contact;
			break;
	}
	return (
		<>
			<div className="main-container">
				<Header />
				<Component />
			</div>
			<Footer />
		</>
	);
}

export default App;
