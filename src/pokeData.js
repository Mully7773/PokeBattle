export const pokeData = [
  {
    id: crypto.randomUUID(),
    pokemonSprite: 'https://placehold.jp/150x150.png',
    pokemonName: 'espeon',
    pokemonType: 'fairy',
    stats: [
      {
        base_stat: 65,
        stat: {
          name: 'hp',
        },
      },
      {
        base_stat: 65,
        stat: {
          name: 'attack',
        },
        statImage: '/src/assets/sword-thin-svgrepo-com.svg',
      },
      {
        base_stat: 60,
        stat: {
          name: 'defense',
        },
        statImage: '/src/assets/defense.svg',
      },
      {
        base_stat: 42,
        stat: {
          name: 'sp-attack',
        },
        statImage: '/src/assets/shuriken-svgrepo-com.svg',
      },
      {
        base_stat: 95,
        stat: {
          name: 'sp-defense',
        },
        statImage: '/src/assets/special-defense.svg',
      },
      {
        base_stat: 12,
        stat: {
          name: 'speed',
        },
        statImage: '/src/assets/speed.svg',
      },
    ],
    ability: 'synchronize',
    hiddenAbility: 'magic bounce',
  },
  // {
  //   id: crypto.randomUUID(),
  //   pokemonSprite: 'https://placehold.jp/150x150.png',
  //   pokemonName: 'umbreon',
  //   pokemonType: 'dark',
  //   stats: [
  //     {
  //       base_stat: 72,
  //       stat: {
  //         name: 'hp',
  //       },
  //     },
  //     {
  //       base_stat: 82,
  //       stat: {
  //         name: 'attack',
  //       },
  //     },
  //     {
  //       base_stat: 59,
  //       stat: {
  //         name: 'defense',
  //       },
  //     },
  //     {
  //       base_stat: 119,
  //       stat: {
  //         name: 'sp-attack',
  //       },
  //     },
  //     {
  //       base_stat: 115,
  //       stat: {
  //         name: 'special-defense',
  //       },
  //     },
  //     {
  //       base_stat: 110,
  //       stat: {
  //         name: 'speed',
  //       },
  //     },
  //   ],
  //   ability: 'quick attack',
  //   hiddenAbility: 'dark divide',
  // },
];
