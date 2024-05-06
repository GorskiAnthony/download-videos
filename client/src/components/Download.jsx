import { useState, useEffect } from "react";
import io from "socket.io-client";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

import Modal from "./Modal";
import Steps from "./Steps";

function Download() {
	const [isShowModal, setIsShowModal] = useState(false);
	const [progress, setProgress] = useState(0);
	const [downloadDone, setDownloadDone] = useState(false);

	useEffect(() => {
		const socket = io(import.meta.env.VITE_BACKEND_URL);

		socket.on("downloadProgress", (data) => {
			setDownloadDone(data.message);
		});

		socket.on("conversionProgress", (data) => {
			setProgress(data.progress);
		});

		return () => socket.disconnect();
	}, []);
	const fetchVideo = async (url) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_BACKEND_URL}/download?url=${url}`,
				{
					method: "GET",
				}
			);

			if (!response.ok) {
				const message = `Une erreur s'est produite: ${response.status}`;
				console.error(message);
				throw new Error(message);
			} else {
				const data = await response.json();
				console.log(data);

				if (data.done) {
					// Créez un lien de téléchargement pour télécharger le fichier
					const link = document.createElement("a");
					link.href = data.outputVideoPath; // Utilisez l'URL retournée par le backend
					link.download = data.outputVideoPath.split("/").pop(); // Utilisez le nom de fichier du lien
					document.body.appendChild(link);
					link.click();
					document.body.removeChild(link);
					setShowModal(false);
				} else {
					console.error(
						"Le téléchargement n'est pas terminé côté serveur."
					);
				}
			}
		} catch (error) {
			console.error(
				"Une erreur s'est produite lors de la récupération des données:",
				error
			);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted");

		setIsShowModal(true);
		setProgress(0);
		const url = e.target.url.value;
		fetchVideo(url);
	};

	return (
		<>
			<Modal isOpen={isShowModal} onClose={() => setIsShowModal(false)}>
				<Steps progress={progress} downloadDone={downloadDone} />
			</Modal>
			<form className="mt-16 flex" onSubmit={handleSubmit}>
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
					type="submit"
					className="inline-flex items-center gap-x-2 bg-indigo-600 px-3.5 p-auto text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-r-lg"
				>
					<span className="hidden sm:block">Téléchargement</span>
					<ArrowDownTrayIcon className="-mr-0.5 h-5 w-5" />
				</button>
			</form>
		</>
	);
}

export default Download;
