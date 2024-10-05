import "./styles/reset.css";
import "./styles/main.scss";

import Hero from "./components/Hero";
import About from "./components/About";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<About />
		</>
	);
}

export default App;
