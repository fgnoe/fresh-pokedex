
A fresh take on the classic Pokedex. 

[![Netlify Status](https://api.netlify.com/api/v1/badges/52ee2489-9558-4b5c-8007-4f365dd70c41/deploy-status)](https://app.netlify.com/sites/classy-sable-499532/deploys)

## Requirements
- Node.js 22 or higher

## How to run the project:
1. Run `npm install` to install the npm dependencies
2. Run `npm run dev` to start the development server

## Development Notes

### Image Processing
The project uses blurhash for image placeholders. The blurhash values are pre-generated and stored in `src/resources/pokemonList.ts`.

> **Note:** The canvas package (used for blurhash generation) is optional and not required for normal usage of the application. The install-helper script will automatically detect if your system has the required dependencies and skip canvas installation if they're missing.

If you need to regenerate the blurhash values, you'll need to install additional system dependencies.

First, make sure you have pkg-config installed (required for checking other dependencies):

#### macOS
```
brew install pkg-config
```

#### Ubuntu/Debian
```
apt-get install pkg-config
```

Then install the canvas dependencies:

#### macOS
```
brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman
```

#### Ubuntu/Debian
```
apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev libpixman-1-dev
```

After installing these dependencies, you can run:
```
node build-pokemon-list.js
```

This will regenerate the Pokemon list with blurhash values.
