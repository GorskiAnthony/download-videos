import avatar from "../assets/avatar.png";
function Information() {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-16 mx-auto flex flex-col">
				<div className="lg:w-4/6 mx-auto">
					<div className="flex flex-col sm:flex-row mt-10">
						<div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
							<div className="w-20 h-20 inline-flex items-center justify-center bg-gray-200 rounded-full text-gray-400">
								<img
									src={avatar}
									alt="Avatar"
									className="rounded-full"
								/>
							</div>
							<div className="flex flex-col items-center text-center justify-center">
								<h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
									Anthony Gorski
								</h2>
								<div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
								<p className="text-base">
									Un développeur web qui préfère s'abstenir
									d'utiliser des sites web permettant de
									télécharger des vidéos, tout en étant
									curieux de savoir ce qui se passe en
									arrière-plan.
								</p>
							</div>
						</div>
						<div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
							<p className="leading-relaxed text-lg mb-4">
								Ce site permet de télécharger des vidéos depuis
								n'importe quel plateforme de streaming vidéo.
								Youtube, twitter, facebook, vimeo, etc.
								<br />
								Il suffit de copier le lien de la vidéo et de le
								coller dans le champ de texte ci-dessous et
								cliquer sur le bouton de téléchargement.
								Attendre quelques secondes le temps du
								traitement et celui ci sera directement
								téléchargé sur votre appareil.
							</p>
							<a
								className="text-indigo-500 inline-flex items-center"
								href="https://github.com/GorskiAnthony/download-videos"
							>
								Le repo github
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Information;
