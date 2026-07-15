## Part of the Pokedex App Project live journaling

### THE SCOPE! It do be creepin’.
I'm still working through my POC of how I'm going to organize my data. While doing so, this is a great time to think through a lot of my application’s other logic.

I've decided that I'm going to mock a "configuration API. In a real world app, update and configuration would come from direct application updates but it can also come in the form of the app "calling home" to get more info. In my case, I've decided to ship the app only focusing on generation 1. As I work through the data for subsequent generations, I can "release" that as part of configuration. The config JSON will control how the app interacts with PokeAPI.

So, I will need a table. This one will keep track of the last time the app received config data from the "home" API. When there is new data, it will write it to the table and use that to inform whether or not it gets new data from PokeAPI. 

Luckily, for the React POC, there's no need to migrate tables if configuration calls for it... I'll likely need to figure that out once I move passed these POC but that's something that I've handled before.
