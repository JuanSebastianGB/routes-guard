export const baseUrl = 'https://rickandmortyapi.com/api/';
export const characterUrl = `${baseUrl}character/`;

export const getCharacter = () =>
  fetch(characterUrl + '2').then((response): Promise<any> => response.json());
