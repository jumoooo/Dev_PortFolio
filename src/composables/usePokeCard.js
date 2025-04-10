import pokemon from 'pokemontcgsdk';

export const usePokeCard = () => {
  const getPokemonCards = async params => {
    if (params?.q.length > 0 && !/^[a-zA-Z0-9\s:]+$/.test(params?.q)) {
      throw new Error('카드 이름은 영어로 입력해 주세요.');
    }
    try {
      const query = params.q
        ? `${params.q} -supertype:Energy`
        : '-supertype:Energy';
      const response = await pokemon.card.where({
        q: query,
        pageSize: params.pageSize,
        page: params.page,
      });
      return response;
    } catch (err) {
      throw err;
    }
  };
  return {
    getPokemonCards,
  };
};
