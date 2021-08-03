export const players = [
  {
    id: 1,
    name: 'Andre Lellis',
    marketValue: '12000000',
    positions: 'Offensive Midfielder',
    club: 'FC Botafago',
    description: 'Nothing can beat Fogo di Chao',
    age: '33',
    featured: true,
    image: 'https://i.ibb.co/LxYL8yN/Andre.jpg',
    category: 'midfielder',
    foot: 'left',
    injured: false
  },
  {
    id: 2,
    name: 'Daniel Slattery',
    marketValue: '11500000',
    positions: 'Left Back',
    club: 'FC Dublin',
    description: 'Inferior Daniel',
    age: '32',
    featured: true,
    image: 'https://i.ibb.co/DGpFfN7/DanielS.jpg',
    category: 'defender',
    foot: 'right',
    injured: false
  },
  {
    id: 3,
    name: 'Daniel Cassel',
    marketValue: '9000000',
    positions: 'Right Forward',
    club: 'Bristol Rovers',
    description: 'Superior Daniel',
    age: '24',
    featured: true,
    image: 'https://i.ibb.co/RNNfh9F/DanielC.jpg',
    category: 'forward',
    foot: 'both',
    injured: false
  },
  {
    id: 4,
    name: 'Marius Obreja',
    marketValue: '13000000',
    positions: 'goalkeeper',
    club: 'Bristol Rovers',
    description: 'Superior Daniel',
    age: '24',
    featured: false,
    image: 'https://i.ibb.co/RNNfh9F/DanielC.jpg',
    category: 'goalkeeper',
    foot: 'both',
    injured: true
  }
];

export const singlePlayer = [
  {
    id: 1,
    name: 'Andre Lellis',
    firstName: 'Andre',
    lastName: 'Lellis',
    nationalities: 'Brazilian',
    nationImage:
      'https://pngtree.com/freepng/tattered-brazilian-flag_6168303.html',
    club: 'FC Botafago',
    description: 'Nothing can beat Fogo di Chao',
    age: '33',
    positions: 'Offensive Midfielder',
    marketValue: '12000000',
    category: 'midfielder',
    injured: false,
    stars: '4.3',
    image: 'https://i.ibb.co/LxYL8yN/Andre.jpg',
    featured: true,
    goals: '24 goals',
    images: [
      { url: 'https://i.ibb.co/LxYL8yN/Andre.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' }
    ]
  },
  {
    id: 2,
    name: 'Daniel Cassel',
    firstName: 'Daniel',
    lastName: 'Cassel',
    nationalities: 'English',
    nationImage:
      'https://pngtree.com/freepng/england-flag-transparent-watercolor-painted-brush_5326752.html',
    club: 'FC Bristol City',
    description: 'Superior Daniel',
    age: '24',
    positions: 'Right Forward',
    marketValue: '9000000',
    category: 'forward',
    injured: false,
    stars: '3.9',
    image: 'https://i.ibb.co/RNNfh9F/DanielC.jpg',
    featured: true,
    goals: '49 goals',
    images: [
      { url: 'https://i.ibb.co/RNNfh9F/DanielC.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' }
    ]
  },
  {
    id: 3,
    name: 'Daniel Slattery',
    firstName: 'Daniel',
    lastName: 'Slattery',
    nationalities: 'Irish',
    nationImage:
      'https://pngtree.com/freepng/torn-paper-national-flag-of-ireland_6470411.html',
    club: 'FC Linfield',
    description: 'Inferior Daniel',
    age: '32',
    positions: 'Left Back',
    marketValue: '11500000',
    category: 'defender',
    injured: false,
    stars: '4.1',
    image: 'https://i.ibb.co/DGpFfN7/DanielS.jpg',
    featured: true,
    goals: '15 goals',
    images: [
      {
        url: 'https://images.generated.photos/jdk9Kpp4aApbDf2WYTWejhViFEH5v5YHDOeTXQlAJEw/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NzkxMzIuanBn.jpg'
      },
      {
        url: 'https://i.insider.com/5fd350fae00bce00188bab82?width=1000&format=jpeg&auto=webp'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg'
      },
      {
        url: 'data:image/jpeg;base64,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'
      },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' }
    ]
  },
  {
    id: 4,
    name: 'Andre Lellis',
    firstName: 'Andre',
    lastName: 'Lellis',
    nationalities: 'Brazilian',
    nationImage:
      'https://pngtree.com/freepng/tattered-brazilian-flag_6168303.html',
    club: 'FC Botafago',
    description: 'Nothing can beat Fogo di Chao',
    age: '33',
    positions: 'Offensive Midfielder',
    marketValue: '12000000',
    category: 'midfielder',
    injured: false,
    stars: '4.3',
    image: 'https://i.ibb.co/LxYL8yN/Andre.jpg',
    featured: true,
    goals: '24 goals',
    images: [
      { url: 'https://i.ibb.co/LxYL8yN/Andre.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' },
      { url: 'https://i.ibb.co/B35SdRf/irisFlag.jpg' }
    ]
  }
];
