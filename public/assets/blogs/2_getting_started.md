## Pokédex App Project Continued
In summary, I am re-creating the same Pokédex Application in a handful off mobile development platforms. This is part of the Pokedex App Project Blogging that I'm treating more like live journaling.

## Where to start?
Well, thinking back to the requirements that I set for myself, I need it work offline, communicate with PokéAPI, and store data locally. Sounds easy enough...but I also need to design the app, set functionality requirements, think through data storage, plan out testing, deal with some unforeseen issues, and spiral into a sobbing mess at the amount of work ahead...

Well, maybe let's not start spiraling and just pick something:
**I am going to focus on loading the data from PokéAPI and the structure of the data at rest.**

## The Plan
I'm pretty familar with ETL processes at this point. My source will be PokéAPI and my sink will be my application storage. I'll start by planning out the structure of my data and then move on to working through pulling from PokéAPI. I won't need *EVERYTHING* that PokéAPI has so I can trim some of it down. I'm going to focus on the first 151 Pokémon and include their regional varients as well. 

So... I'll need:
- To pull the list of 151 Pokémon from `pokeapi.co/api/v2/pokemon`.
  - I could start by persisting this list in a main `pokemon` table with an "inactive" flag. Then make it "active" once it's filled out.
  - This means I'll be looping a few times...but, ideally, not over the same data set. Luckily, I can segment my list retrivals into the Pokémon generations and keep this first operation at O(n) where n is the amount of Pokémon to load. 
- Okay...So now I have a list of Pokémon that I need data on.
  - Unfortunantely, the data that I want on each Pokémon is split across two endpoints...
    - I can't assume that I'll know all my URLs when coding for this. Regional and special forms have ids that I can't predict so I should stick with operating on URLs that I get back from PokéAPI.
    - The data that comes back from `/pokemon` includes a `/pokemon/{number}` url. So I will be use that to get the bulk of the data including a `/pokemon-species` url that gets the rest. 
    - This isn't too bad on most Pokémon but some have special forms that I need... Like Raichu.
    - My complexity just went up...  So with the Raichu example:
        - Get Raichu from the list
        - Get the first bit from `/pokemon/26` and use that return data to get the `/pokemon-species/26` url.
        - Get the second bit from `/pokemon-species/26` and **It's here that I "learn" that Raichu has another form!** So, from this data, I'll get another `/pokemon/{number}` url for it's Alolan form (`pokeapi.co/api/v2/pokemon/10100/`).
        - Get the form's data from from `pokeapi.co/api/v2/pokemon/10100/`. Luckily, the "species" data is the same so I won't need to get that again.
- I'll also probably stub out a "call home" functionality that I can use to tell the app to update certain parts of its data. There are new games and updates to PokéAPI all the time.
  - I likely won't fully implement the actual "home" part, but it would be good to think through full or incremental updates.


## The POC
I will eventually use a WASM solution for Postgre in the browser. For now, though, I’m doing a POC in a separate node app app that will save the data to a SQLite DB. When I get to each app, I'll utilize technology specific solutions based on convention for each language/framework. 

So…why don't I just do this once and package the data with the data with the app? Well, I will! I will likely include the first 151 pokemon with the app. After that, I want the app to be relatively self-sufficient and routinely keep the data up-to-date with minimal involvement from me. The pokemon franchise moves quick! (Feels like a lot of work for a learning exercise…)