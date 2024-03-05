# "TV Shows" Vue.js app

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/dudintv/tv-shows)

Top useful commands:
```sh
nvm use 20.10
npm install

npm run dev
npm run test:unit
```

The app presents all TV shows from TV Maze open API database.

## Design

![TV Shows logo](https://github.com/dudintv/tv-shows/raw/main/readme/logo.svg)

My Figma file — https://www.figma.com/file/O0uj5ktsbWMS5foqTjqNd2/TV-Maze-for-ABN-AMRO?type=design&node-id=1%3A33&mode=design&t=ZgPT2S4ZWr2UnDdl-1

(or see screenshots below)

I made a simple branding style based on the name of the project **"TV Shows"** and branding colors related   to **TV Maze** and **ABN AMRO**.

![TV Shows colors](https://github.com/dudintv/tv-shows/raw/main/readme/colors.svg)

## Used stack

* **Node.js**: v20.10.0
* **NPM**: v10.2.3
* the latest **Vue.js** — I like the (relatively) new feature of Props deconstructing with TS supporting ❤️
* **Vue Query** — apparently, there weren't so much reason to use it but I wanted to try. But I believe it's the most correct and modern way to keep remote data. Especially when you need to dynamically update them (not the case).
* **Pinia** —  I keep there only the common data related to the running time. It's better to keep API data in Vue Query.
* **VueUse** — I think it's not smart to avoid the nice done solutions that are already auto-tested and test by community. And, to not re-invent wheels ;)
* **Tailwind** — I'm a fan of this. Especially for quick prototyping and small projects. In other cases I prefer to combine this approach with any UI framework.
* **Vite** and **Vitest** — just because they fast and reliable. No need to duplicate configs (DRY). Vitest is very similar to Jest.
* **ESlint** and  **Prettier** — to keep the style across whole app and make auto-formatting that makes developing a bit faster and stressless.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# UI design

My Figma file — https://www.figma.com/file/O0uj5ktsbWMS5foqTjqNd2/TV-Maze-for-ABN-AMRO?type=design&node-id=1%3A33&mode=design&t=ZgPT2S4ZWr2UnDdl-1

![TV Shows — Main page](https://github.com/dudintv/tv-shows/raw/main/readme/main-page.png)
![TV Shows — Show details page](https://github.com/dudintv/tv-shows/raw/main/readme/details-page.png)
![TV Shows — Search result page](https://github.com/dudintv/tv-shows/raw/main/readme/search-page.png)
