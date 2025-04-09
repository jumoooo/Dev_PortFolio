import { boot } from 'quasar/wrappers';
import pokemon from 'pokemontcgsdk';

const apiKey = import.meta.env.VITE_POKEMON_API_KEY;

pokemon.configure({ apiKey: apiKey });
export default boot(async (/* { app, router, ... } */) => {
  pokemon;
});
