// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:"https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
    },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  },
];

// Rooms Array

const roomsArray = ['el comedor','el conservatorio','la cocina','el estudio','la libreria','er futbolin','la lounge','el garaje','el spa','el recibidor','el teatro','la caseta del perro','el patio']

// Weapons Array

const weaponsArray = [
  {
    name: "la soga",
    weight: 10,   
  },
  {
    name: "er pinxo",
    weight: 8,   
  },
  {
    name: "er candelabro",
    weight: 2,   
  },
  {
    name: "el badajo de la campana",
    weight: 30,   
  },
  {
    name: "cianuro",
    weight: 2   
  },
  {
    name: "la motosierra",
    weight: 15   
  },
    {
    name: "el bate de hierro",
    weight: 13,
    
  },
  {
    name: "er trofeo de escupir aceitunas to lejos",
    weight: 25,
    
  },
  {
    name: "la cacharra",
    weight: 20,
    
  },
];


// ITERATION 2

function selectRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
}
//console.log(selectRandom(suspectsArray))

function pickMystery() {
  return suspectObject = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
}
}
//console.log(pickMystery())

  
// ITERATION 3

function revealMystery() {
  let finalSuspect = pickMystery();
  return envelope = `El tremendo cabronasi de ${finalSuspect.suspect.firstName} ${finalSuspect.suspect.lastName} ha matao a Paco con ${finalSuspect.weapon.name} en ${finalSuspect.room}`;
}
//console.log(revealMystery());

