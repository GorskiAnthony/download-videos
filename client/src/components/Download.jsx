import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

function Download() {
	return (
		<form className="mt-16 flex">
			<div className="flex-1">
				<input
					type="url"
					name="url"
					id="url"
					className="block w-full border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 py-5  rounded-l-lg"
					placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
					pattern="https://.*"
					required
				/>
			</div>
			<button
				type="button"
				className="inline-flex items-center gap-x-2 bg-indigo-600 px-3.5 p-auto text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-r-lg"
			>
				<span class="hidden sm:block">Téléchargement</span>
				<ArrowDownTrayIcon className="-mr-0.5 h-5 w-5" />
			</button>
		</form>
	);
}

export default Download;
