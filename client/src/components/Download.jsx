import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

function Download() {
	return (
		<form className="mt-32 flex">
			<div className="rounded-l-lg inset-y-0 left-0 flex items-center ring-gray-300 ring-1 ring-inset">
				<label htmlFor="provider" className="sr-only text-white">
					Provider
				</label>
				<select
					id="provider"
					name="provider"
					className="h-full border-0 bg-transparent py-0 pl-2 pr-7 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "
				>
					<option>YouTube</option>
					<option>X - (Twitter)</option>
				</select>
			</div>
			<div className="flex-1">
				<input
					type="url"
					name="url"
					id="url"
					className="block w-full border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 py-5"
					placeholder="http://localhost:3000/"
					pattern="https://.*"
					required
				/>
			</div>
			<button
				type="button"
				className="inline-flex items-center gap-x-2 bg-indigo-600 px-3.5 p-auto text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-r-lg"
			>
				Téléchargement
				<ArrowDownTrayIcon className="-mr-0.5 h-5 w-5" />
			</button>
		</form>
	);
}

export default Download;
