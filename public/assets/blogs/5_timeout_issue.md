May 25 2025

Turns out, I was doing a little too much. I was trying running into a timeout issue by trying to load too many Pokémon at once. Partially, this was because of a bug where my batches weren’t actually batching and I ended up firing off 151 requests to PokéAPI at once and then get hung up… Oddly enough, this worked until I have to communicate with three different endpoints for a single pokemon (base data, species data, and image data). Once I added in the fetch for the images, it all came crashing (literally) down.

The fix? Refactor to remove all parallelism and get it to work that way. Then slowly try to get some parallelism going again.
