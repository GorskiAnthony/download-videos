const getDownloadCommand = (videoUrl, outputPath) => {
	return `yt-dlp --no-check-certificate -f bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best -o "${outputPath}" "${videoUrl}"`;
};

module.exports = { getDownloadCommand };
