import "./styles/reset.css";
import "./styles/main.scss";

import Hero from "./components/Hero";
import About from "./components/About";

function App() {
	return (
		<div className="container">
			<Hero />
			<About />
		</div>
	);
}

export default App;
