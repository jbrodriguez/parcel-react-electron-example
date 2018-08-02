# parcel-react-electron

A minimal Electron + React.js boilerplate with [parcel as bundler](https://github.com/parcel-bundler/parcel). Parcel is an alternative web application bundler to Webpack.

## Installation

```
yarn
```

# Issue

I feel like I am missing some small insight around HRM or using Parcel with Electron projects.

## Setup #1 (start file = index.html, target=browser)
```
yarn start:html:browser
```

This loads, HMR works as well, however if you uncomment the `import { remote } from 'electron'` line in `index.js` it causes an expected `fs.existsSync` becasue its trying to use the node API with target=browser.

## Setup #2 (start file = index.html, target=electron)

```
yarn start:html:electron
```

If I try to remedy this by setting `target=electron`, everything seems to work fine but the server does not start so I can't link to it from my render process -> `index.html`. I guess this is intention per this issue:

https://github.com/parcel-bundler/parcel/issues/1005

However is there a way to force it on, or a better way to setup this type of Electron project in general?


## Setup #3 (start file = index.js, target=electron, source from `build/` folder)
```
start:js:electron:no-url
```

If I aim Parcel at just the render process `index.js` file, and source it directly as `../build/index.js` in the `index.html` file (you have to manually comment/uncomment the lines in `index.html`), the HTML renders, however, the `import './App.css'` does not work for some reason. I have to link to it directly in the index.js file in the build folder (`../build/index.css`).

## Setup #4

I tried using creating `bundle-script.js` to do the same via the API and middleware (target=electron + running the local dev server) but the HTML seems to be bundled up in a .js file wich causes it to fail (`Uncaught SyntaxError: Unexpected token <`)


