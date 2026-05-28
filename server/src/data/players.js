const players = [
  {
    id: 0,
    name: 'Ronaldo de Assis Moreira',
    marketValue: 12000000,
    positions: 'Offensive Midfielder',
    club: 'FC Botafago',
    description: 'Nothing can beat Fogo di Chao',
    age: 33,
    featured: true,
    image:
      'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTOZ3ickOUk26zv6ZraQps9wURcyiCZ7qVEdvgcMeb0tHXyOdj0WVvwTDlwtR1Y',
    category: 'midfielder',
    foot: 'both',
    injured: false
  },
  {
    id: 1,
    name: 'Paolo Maldinho',
    marketValue: 11500000,
    positions: 'Left Back',
    club: 'AC Milan',
    description: 'He is widely regarded as one of the greatest ever defenders',
    age: 32,
    featured: true,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Maldini2008.JPG/440px-Maldini2008.JPG',
    category: 'defender',
    foot: 'left',
    injured: false
  },
  {
    id: 2,
    name: 'Gareth The Welsh',
    marketValue: 9000000,
    positions: 'Right Winger',
    club: 'Real Madrid',
    description: 'Welsh professional players who plays as a winger',
    age: 32,
    featured: true,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/AUT_vs._WAL_2016-10-06_%28155%29.jpg/440px-AUT_vs._WAL_2016-10-06_%28155%29.jpg',
    category: 'forward',
    foot: 'left',
    injured: true
  },
  {
    id: 3,
    name: 'Marius Obreja',
    marketValue: 49000000,
    positions: 'Striker',
    club: 'Codeworks',
    description: 'Best goalscoring software engineer in the world',
    age: 33,
    featured: false,
    image:
      'https://scontent-lhr8-1.xx.fbcdn.net/v/t1.6435-9/57246924_10157093575793749_414064705947041792_n.jpg',
    category: 'forward',
    foot: 'both',
    injured: false
  },
  {
    id: 4,
    name: 'Gigi Buffon',
    marketValue: 21000000,
    positions: 'Goalkeeper',
    club: 'Juventus Torino',
    description:
      'He is widely regarded as one of the greatest goalkeepers of all time',
    age: 43,
    featured: false,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Gianluigi_Buffon_%2831784615942%29_%28cropped%29.jpg/440px-Gianluigi_Buffon_%2831784615942%29_%28cropped%29.jpg',
    category: 'goalkeeper',
    foot: 'both',
    injured: false
  },
  {
    id: 5,
    name: 'Ronaldo Nazario',
    marketValue: 19000000,
    positions: 'Left Winger',
    club: 'Rayo Vallecano',
    description: 'Popularly dubbed O Fenomeno',
    age: 44,
    featured: false,
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/051119SMcC0014.jpg',
    category: 'forward',
    foot: 'both',
    injured: false
  },
  {
    id: 6,
    name: 'Zinedine Zizou',
    marketValue: 17500000,
    positions: 'Left Midfielder',
    club: 'Juventus Torino',
    description:
      'Zidane was an elite playmaker renowned for his elegance, vision, passing, ball control, and technique',
    age: 49,
    featured: false,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg',
    category: 'midfielder',
    foot: 'right',
    injured: false
  },
  {
    id: 7,
    name: 'Franz Beckenbauer',
    marketValue: 11000000,
    positions: 'Centre Back',
    club: 'Bayern Munich',
    description:
      'In his playing career he was nicknamed Der Kaiser ("The Emperor")',
    age: 50,
    featured: false,
    image:
      'https://img.a.transfermarkt.technology/portrait/big/72347-1578998783.jpg?lm=1',
    category: 'defender',
    foot: 'right',
    injured: false
  },
  {
    id: 8,
    name: 'David Becks',
    marketValue: 10500000,
    positions: 'Right Midfielder',
    club: 'Man Utd',
    description:
      'First English player to win league titles in four countries',
    age: 46,
    featured: false,
    image:
      'https://e3.365dm.com/21/04/2048x1152/skynews-david-beckham-manchester-united_5341930.jpg',
    category: 'midfielder',
    foot: 'right',
    injured: true
  },
  {
    id: 9,
    name: 'Cafu The Superior Brazilian',
    marketValue: 13800000,
    positions: 'Right Back',
    club: 'AS Roma',
    description:
      'Most internationally capped Brazilian player of all time',
    age: 51,
    featured: false,
    image:
      'https://dotorg.brightspotcdn.com/dims4/default/b7b5749/2147483647/strip/true/crop/400x400+0+0/resize/1200x1200!/quality/90/?url=http%3A%2F%2Fsoi-brightspot.s3.amazonaws.com%2Fdotorg%2F23%2F49%2Fe3417fbd4645a06f239ce85d53f6%2F400x400-marcos-evangelista-de-morais.jpg',
    category: 'defender',
    foot: 'both',
    injured: false
  }
];

module.exports = {
  players
};
