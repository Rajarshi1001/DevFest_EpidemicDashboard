# Epidemic-Dashboard

This is an API based Epidemic Dashboard, currently under development.  
We have used [these APIs](./Backend/README.md) for data collection.

To Setup this project at your local, `npm install` inside `./Backend`.  
Then Run `node ./Backend/app.js` and pass in PORT.

We have taken up the currently ongoing pandemic as the main epidemic in context.

## Working Principles

Run `./Backend/app.js` to start the server (currently under development).
The server reaches out for the APIs, requests relevant data, stores some of them in mongodb, and `index.js` uses that for necessary calculations and rendering on pages.
There are currently 4 main routes availabe, and the initial one is rendered at `process.env.PORT`.

- `index` - The Main Page
- `world` - World Status Page
- `india` - India Status Page
- `person` - The User Status Page

We have used tools including:

- `npm` for package management
- `node` for server side development
- `HTML5` and `CSS` for webpage creation and design
- `express` for route handling,
- `ejs` for html data rendering
- `mongodb` for database management
- `python` for graph generation

## TEAM(AyeAyeTK)

- [Rajarshi Dutta](https://github.com/Rajarshi1001)
- [Bhoomi Choudhary](https://github.com/bhoomi2611)
- [B.Anshuman](https://github.com/ba-13)
