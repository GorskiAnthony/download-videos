# Utilise l'image de base Debian
FROM debian:buster-slim

# Met à jour les paquets et installe les dépendances nécessaires
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    ffmpeg \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Installe Node.js et npm
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get update && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Installe yt-dlp avec pip
RUN pip3 install yt-dlp

# Création du dossier de travaille
WORKDIR server/

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]