const getDownloadCommand = (platform, videoUrl, outputPath) => {
	switch (platform) {
		case "youtube":
			return `yt-dlp --no-check-certificate -f bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best -o "${inputVideoPath}" "${videoUrl}"`;
		case "twitter":
			return `yt-dlp --no-check-certificate -f bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best -o "${outputPath}" "${videoUrl}"`;
		default:
			return `yt-dlp --no-check-certificate -f bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best -o "${outputPath}" "${videoUrl}"`;
	}
};

module.exports = { getDownloadCommand };
