import Download from "./components/Download";
import Footer from "./components/Footer";
import Information from "./components/Information";
import Navbar from "./components/Navbar";
function App() {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
				<Download />
				<Information />
			</main>
			<Footer />
		</div>
	);
}

export default App;
