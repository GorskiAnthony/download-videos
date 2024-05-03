<h1 align="center">Bienvenue sur le server de MediaMagnet 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/Gorski_anthony" target="_blank">
    <img alt="Twitter: Gorski_anthony" src="https://img.shields.io/twitter/follow/Gorski_anthony.svg?style=social" />
  </a>
</p>

## Prérequis

Pour que votre application fonctionne correctement, vous devez avoir installé les dépendances suivantes :

-   Node.js
-   npm
-   ffmpeg : [documentation ici](https://ffmpeg.org/)
-   yt-dlp : [documentation ici](https://github.com/yt-dlp/yt-dlp/wiki/Installation#using-the-release-binary)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

Une fois le serveur lancé, il faut se rendre sur [http://localhost:3000](http://localhost:3000) pour accéder à l'application.

Pour telecharger une vidéo, le front n'étant pas encore développé, il faut passer directement par l'URL suivante :

```txt
http://localhost:3000/download?p=<youtube|twitter>&url=<URL_DE_LA_VIDEO>
```

Exemple :

-   Youtube

```txt
http://localhost:3000/download?p=youtube&url=https://www.youtube.com/watch?v=VIDEO_ID
```

-   Twitter

```txt
http://localhost:3000/download?p=twitter&url=https://x.com/USER/status/VIDEO_ID
```

## Description

Ce projet est un outil de téléchargement de vidéos.

Les providers suivants sont supportés :

-   [x] Youtube
-   [x] 𝕏 (twitter)

Il utilise la librairie yt-dlp pour télécharger les vidéos. Vous pouvez télécharger une vidéo en entrant son URL dans le champ prévu à cet effet.

## Auteur

👤 **Anthony Gorski**

-   𝕏 - (Twitter): [@Gorski_Anthony](https://twitter.com/Gorski_Anthony)
-   GitHub: [@GorskiAnthony](https://github.com/GorskiAnthony)

## Affichez votre soutien

## Donnez un ⭐️ si ce projet vous a aidé !

### 🗃️ Version

-   **v1.0.0** - First commit

---

### 👋 Qui suis-je ?

Je suis **Anthony Gorski**, développeur web et formateur à la [Wild Code School](https://www.wildcodeschool.com/fr-FR).
