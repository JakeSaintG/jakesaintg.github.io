# Feb 2026

## Part of the Pokedex App Project live journaling

### Why load the data like this?
The main goal of the React POC is to build out the app and plan where I'm going. I could build out a middle-layer API that talks with PokeAPI, persists the data, checks for updates, and lets the app get all it needs. I don't really need all that, though..so I decided to pull it all in for the React POC.

### Initial Data Load
PokeAPI is an incredible and free resource. My initial attempt at the POC's data store goes quite slowly. The API times out very quickly and has a request limit. So I decided to pull everything down that was needed, store is using WASM, and do so slowly with repeated connections to avoid timeouts.

### For the mobile apps
Yeah I don't like the above solution for the mobile app. Good news about those is that they can be shipped with a SQLite file that solves my problems.
- Must pre-prepare the file
- Will simulate "calling home" where the app downloads it from a "home" API.

