import logo from "../assets/logo.png";

function Navbar() {
	return (
		<header className="text-gray-600 body-font flex justify-center items-center mt-4">
			<a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
				<img
					src={logo}
					alt="logo"
					className="h-20 w-20 p-2  rounded-full"
				/>
				<span className="ml-3 text-xl">MediaMagnet</span>
			</a>
		</header>
	);
}

export default Navbar;
