import pokemon from 'pokemontcgsdk';

export const usePokeCard = () => {
  const fetchCards = async cardName => {
    try {
      let res = await pokemon.card.where({ q: `name:${cardName}` });
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err.message);
      return [];
    }
  };
  return {
    fetchCards,
  };
};
