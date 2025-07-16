import { boot } from 'quasar/wrappers';
import pokemon from 'pokemontcgsdk';

let apiKey = import.meta.env.VITE_POKEMON_API_KEY;
// console.log('test1', apiKey);
// 6791f4b9-1b3d-4db9-81c2-e74ebab5941e

pokemon.configure({ apiKey: apiKey });
export default boot(async (/* { app, router, ... } */) => {
  pokemon;
});
