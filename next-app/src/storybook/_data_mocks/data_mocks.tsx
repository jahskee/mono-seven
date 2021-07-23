interface Pokemon {
  id: string,
  name: string,
  weight: string,
  accuracy: string,
}

const pokemons = [
  {
    id: '10',
    name: 'Poke1',
    weight: '120',
    accuracy: '88',
    power: '24',
    generation: 'gen-x',
    xp: '60.34',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
  },
  {
    id: '12',
    name: 'Poke2',
    weight: '160',
    accuracy: '75',
    power: '24',
    generation: 'gen-i',
    xp: '70.42',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
  },
  {
    id: '63',
    name: 'Poke3',
    weight: '202',
    accuracy: '95',
    power: '24',
    generation: 'gen-b',
    xp: '84.59',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png',
  },
  {
    id: '4',
    name: 'Poke4',
    weight: '180',
    accuracy: '78',
    power: '24',
    generation: 'gen-z',
    xp: '50.78',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  },
  {
    id: '5',
    name: 'Poke5',
    weight: '196',
    accuracy: '98',
    power: '24',
    generation: 'gen-d',
    xp: '80.22',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
  },
  {
    id: '6',
    name: 'Poke6',
    weight: '206',
    accuracy: '99',
    power: '24',
    generation: 'gen-e',
    xp: '92.40',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
  },
  {
    id: '7',
    name: 'Poke7',
    weight: '210',
    accuracy: '89',
    power: '24',
    generation: 'gen-r',
    xp: '78.90',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  },
  {
    id: '8',
    name: 'Poke8',
    weight: '201',
    accuracy: '85',
    power: '24',
    generation: 'gen-e',
    xp: '68.12',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
  },
  {
    id: '9',
    name: 'Poke9',
    weight: '198',
    accuracy: '94',
    power: '24',
    generation: 'gen-w',
    xp: '78.05',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
  },
  {
    id: '16',
    name: 'Poke10',
    weight: '189',
    accuracy: '96',
    power: '24',
    generation: 'gen-v',
    xp: '81.00',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
  },
];

export default {
  pokemons,
};
