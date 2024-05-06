import {
	CloudArrowDownIcon,
	CheckCircleIcon,
	CogIcon,
} from "@heroicons/react/20/solid";
function Steps({ progress, downloadDone = true }) {
	return (
		<div>
			<h1 className="mb-4 text-center font-black text-gray-700">STEPS</h1>
			<div className="flex">
				<div className="w-1/3 text-center px-6">
					<div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
						<div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
							{downloadDone ? (
								<CheckCircleIcon className="h-8 w-8" />
							) : (
								<CloudArrowDownIcon className="h-8 w-8" />
							)}
						</div>
						<div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
							{downloadDone ? (
								<h2 className="font-bold px-8 text-sm">
									Téléchargement terminé
								</h2>
							) : (
								<h2 className="font-bold px-8 text-sm">
									Téléchargement...
								</h2>
							)}
						</div>
					</div>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" />
					</svg>
				</div>
				<div className="w-1/3 text-center px-6">
					<div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
						<div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
							<CogIcon className="h-8 w-8" />
						</div>
						<div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
							<h2 className="font-bold text-sm">
								Traitement de la vidéo
							</h2>
							<p className="text-xs text-gray-600">
								{progress === 0
									? "En attente..."
									: progress === 100
									? "Terminé!"
									: `Progression: ${progress}%`}
							</p>
						</div>
					</div>
				</div>
				<div className="flex-1 flex items-center justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" />
					</svg>
				</div>
				<div className="w-1/3 text-center px-6">
					<div className="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
						<div className="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
							<svg
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
								fillRule="evenodd"
								clipRule="evenodd"
							>
								<path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
							</svg>
						</div>
						<div className="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
							<h2 className="font-bold text-sm">Fini</h2>
							<p className="text-xs text-gray-600">
								Téléchargé la vidéo!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Steps;
