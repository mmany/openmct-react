# openmct-react

This repo is a demonstration of the possibility of an integration of an [OpenMCT](https://github.com/nasa/openmct) instance within a React.js web application.\
The react application is set up using Vite bundler and basic styling is done with Tailwind CSS.\
A simple server is set up with Express.js and websockets for telemetry data, based on the [openmct tutorials](https://github.com/nasa/openmct-tutorial).

## Prerequisites
Make sure that NodeJS and npm package managers are installed.

## How to start

1. Clone the repo and install dependencies
```
git clone https://github.com/mmany/openmct-react
cd openmct-react
npm install
```
2. Start the telemetry server
```
node telemetryServer/server.js
```
The telemetry server should be running on port 8080.
3. Start the react app  on a separate terminal
```
npm run dev
```
The web app should be running on port 5173 by default and can be accessed on http://localhost:5173/

## Contribute

Any suggestions or remarks on the methodology used for the integration of openmct with react are welcome
